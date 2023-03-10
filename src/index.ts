import express from "express";
import { blogsRouter } from "./routers/blogs-router";
import { postsRouter } from "./routers/posts-router";
import { testingRouter } from "./routers/testing-router";
import { runDB } from "./repositories/_mongodb-connect";
import { usersRouter } from "./routers/users-router";
import { authRouter } from "./routers/auth-router";
import { commentsRouter } from "./routers/comments-router";

export const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/auth", authRouter);
app.use("/blogs", blogsRouter);
app.use("/comments", commentsRouter);
app.use("/posts", postsRouter);
app.use("/testing", testingRouter);
app.use("/users", usersRouter);

const startApp = async () => {
  await runDB();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();