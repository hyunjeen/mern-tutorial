const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Goal = require("../models/goalModel");
// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});
// @desc Set goals
// @route POST /api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }
  console.log(req);
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(goal);
});
// @desc Update goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  if (!user) {
    res.status(400);
    throw new Error("Not Found user");
  }
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});
// @desc Delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  if (!user) {
    res.status(400);
    throw new Error("Not Found user");
  }
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await Goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
