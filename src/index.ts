import express from "express";
import { blogsRouter } from "./routers/blogs-router";
import { postsRouter } from "./routers/posts-router";
import { testingRouter } from "./routers/testing-router";
import { runDB } from "./repositories/mongodb/mongodb-connect";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/blogs", blogsRouter);
app.use("/posts", postsRouter);
app.use("/testing", testingRouter);

const startApp = async () => {
  await runDB();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};