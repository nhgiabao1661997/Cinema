const express = require("express");
const { authRouter } = require("./auth");
const { cinemaRouter } = require("./cinema");
const { cineplexRouter } = require("./cineplex");
const { movieRouter } = require("./movies");
const userRouter = require("./users");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/movies", movieRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/cinemas", cinemaRouter);
rootRouter.use("/cineplex", cineplexRouter);

module.exports = rootRouter;
