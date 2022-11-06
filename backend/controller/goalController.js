const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
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
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});
// @desc Update goals
// @route PUT /api/goals/:id
// @access private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `${req.params.id} update goal` });
};
// @desc Delete goals
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `${req.params.id} delete goal` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
