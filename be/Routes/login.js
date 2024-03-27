const express = require("express");
const login = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Modules/users");

login.post("/login", async (request, response) => {
  try {
    const user = await userModel.findOne({
      email: request.body.email,
    });
    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "this user not exist!",
      });
    }
    const isPasswordValid = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return response.status(401).send({
        statusCode: 401,
        message: "Unauthorized",
      });
    }
    const token = jwt.sign(
      {
        fistName: user.firstName,
        lastName: user.lastName,
        eamil: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    response.header("Authorization", token).status(200).send({
      message: "Login successful!",
      statusCode: 200,
      token,
    });
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});

module.exports = login;
