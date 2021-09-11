const { User } = require("../models");
const { checkExistEmail } = require("../middewares/validation/checkExist");
const { signUp, signIn } = require("../controllers/authController");
const express = require("express");

const authRouter = express.Router();

authRouter.post("/sign-up", checkExistEmail(User), signUp);
authRouter.post("/sign-in", signIn);

module.exports = {
  authRouter,
};
