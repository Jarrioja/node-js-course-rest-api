const User = require("../models/user");
const { validationsResult } = require("express-validator");

exports.signup = (req, res, next) => {
  const errors = validationsResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.email;
  const password = req.body.password;
};
