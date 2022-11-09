const express = require("express");
const router = express.Router();
const {
  regiserUser,
  loginUser,
  getMe,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", regiserUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
