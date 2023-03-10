import { body } from "express-validator";
import { usersQueryRepository } from "../../repositories/query-repos/mongodb-users-query-repository";

export const validationEmailResend = body("email").custom(async (value) => {
  const user = await usersQueryRepository.findUserByLoginOrEmail(value);
  if (user?.emailConfirmation.isConfirmed) {
    throw new Error("User with provided email not found or is already confirmed");
  }
  return true;
});