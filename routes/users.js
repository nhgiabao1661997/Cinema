const express = require("express");
const {
  userList,
  detailUser,
  createUser,
  deleteUser,
  updateUser,
  uploadAvatar,
} = require("../controllers/userController");
const {
  getAllTicketUserHasBeenBooking,
} = require("../controllers/ticketController");

const { authenticate, authorize } = require("../middewares/auth/verifyToken");
const { uploadImageSingle } = require("../middewares/uploads/uploadImage");
const { checkExistEmail } = require("../middewares/validation/checkExist");
const { User } = require("../models");

const userRouter = express.Router();

userRouter.get("/", authenticate, authorize(["admin"]), userList);
userRouter.get("/:id", authenticate, authorize(["admin"]), detailUser);
userRouter.post("/", checkExistEmail(User), createUser);
userRouter.delete("/:id", authenticate, authorize(["admin"]), deleteUser);
userRouter.put("/:id", authenticate, authorize(["admin"]), updateUser);

userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImageSingle(),
  uploadAvatar
);

userRouter.post("/get-all-ticket-buy", getAllTicketUserHasBeenBooking);

module.exports = userRouter;
