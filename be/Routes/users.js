const express = require("express");
const router = express.Router();
const userModel = require("../Modules/users");
const bcrypt = require("bcrypt");
router.get("/getUsers", async (request, response) => {
  try {
    const users = await userModel.find();
    response.status(200).send(users);
  } catch (e) {
    response.status(500).send({
      statusCode: 500,
      message: "internal server error",
    });
  }
});

router.post("/createUsers", async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const newUser = new userModel({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: hashedPassword,
    age: request.body.age,
  });
  try {
    const userToSave = await newUser.save();
    response.status(201).send({
      statusCode: 201,
      payload: userToSave,
    });
  } catch (e) {
    response.status(501).send({
      statusCode: 501,
      message: "not ok!",
    });
  }
});

module.exports = router;
