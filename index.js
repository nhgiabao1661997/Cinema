const express = require("express");
const dotenv = require("dotenv");

const rootRouter = require("./routes/rootRouter");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
