const Task = require("../models/dataModel");

const Store = async (req, res) => {
  const { Name, title, email, grid, mobile } = req.body;
  await Task.create({ Name, title, email, grid, mobile });
  res.json({
    success: true,
    message: "Task has been created.",
  });
};
const ViewData = async (req, res) => {
  const tasks = await Task.find();
  res.json({
    success: true,
    tasks
  });
};

const Delete = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({
    success: true,
    message: "employe data delte",
  });
};

const updated = async (req, res) => {
  const { id } = req.params;
  const{ Name, title, email, grid, mobile } = req.body;

  await Task.findByIdAndUpdate(id,{ Name, title, email, grid, mobile });
  res.json("user updated");
};

module.exports = { Store, ViewData, Delete,updated };