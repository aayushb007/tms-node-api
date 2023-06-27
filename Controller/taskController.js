const Task = require("../models/task");

// Create a new task
const createTask = async (req, res) => {
  try {
    const { user_id, title, desc, due_date, status } = req.body;
    const task = new Task({ user_id, title, desc, due_date, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Get a tasks of User by ID
const getTaskByUser = async (req, res) => {
    try {
      const userId = req.params.uid;
      const task = await Task.find({ user_id : userId});
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Update a task
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { user_id, title, desc, due_date, status } = req.body;
    const task = await Task.findByIdAndUpdate(
      taskId,
      { user_id, title, desc, due_date, status },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  getTaskByUser,
  deleteTask,
};
