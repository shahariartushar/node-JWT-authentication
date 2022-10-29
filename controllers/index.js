const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.getRequest = (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
};

exports.postRequest = (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
};

exports.login = (req, res) => {
  // Mock User
  jwt.sign({ User }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token,
    });
  });
};
