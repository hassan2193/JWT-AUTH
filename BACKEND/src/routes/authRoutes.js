const express = require("express");

const router = express.Router();

const {
  register,
  login,
  refreshAccessToken,
  logout,
  profile,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);
router.get("/profile", protect, profile);

module.exports = router;
