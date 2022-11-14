const express = require("express");
const router = express.Router();
const {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal,
} = require("../controller/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(updateGoal).delete(protect, deleteGoal);

module.exports = router;
