const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");
require("dotenv").config();
const cors = require("cors");

const PORT = 3084;

const app = express();

const usersRoute = require("./routes/users");
const booksRoute = require("./routes/books");
const loginRoute = require("./routes/login");
const gitHubRoute = require("./routes/gitHub");
app.use(cors());

app.use(express.json());

app.use(logger);
app.use("/", usersRoute);
app.use("/", booksRoute);
app.use("/", loginRoute);
app.use("/", gitHubRoute);

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
