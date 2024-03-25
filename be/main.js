const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3082;

const app = express();

app.get("/", (request, response) => {
  response.status(200).send({
    name: "FER",
    isOnline: true,
  });
});

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
