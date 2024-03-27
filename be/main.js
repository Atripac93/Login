const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");
require("dotenv").config();

const PORT = 3083;

const app = express();

const usersRoute = require("./Routes/users");
const loginRoute = require("./Routes/login");

app.use(express.json());

app.use(logger);
app.use("/", usersRoute);
app.use("/", loginRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error db connection"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(PORT, () =>
  console.log(`server collegato alla porta numero ${PORT}`)
);
