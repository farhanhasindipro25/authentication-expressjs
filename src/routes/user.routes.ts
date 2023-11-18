import express from "express";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controller/user.controller";

const router = express.Router();

// Create a new user (POST)
router.post(
  "/api/v1/users",
  validateResource(createUserSchema),
  createUserHandler
);

export default router;
