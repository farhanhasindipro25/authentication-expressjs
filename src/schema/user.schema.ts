import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Email is not valid"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short. Should be minimum 6 characters!"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
