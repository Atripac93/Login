const express = require("express");
const router = express.Router();
const userModel = require("../Modules/users");

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

module.exports = router;
