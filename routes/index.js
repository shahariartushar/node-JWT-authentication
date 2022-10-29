const express = require("express");

const requestController = require("../controllers/index");
const verifyMiddleware = require("../middleware/index");

const router = express.Router();

router.get("/api", requestController.getRequest);

router.post(
  "/api/posts",
  verifyMiddleware.verifyToken,
  requestController.postRequest
);

router.post("/api/login", requestController.login);

module.exports = router;
