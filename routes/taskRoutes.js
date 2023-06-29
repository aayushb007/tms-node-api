const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");
const  authenticateToken  = require("../Middleware/authentication");
const Task = require("../models/task");


//Search a task using title or description
router.get('/search/:uid', taskController.searchTasks);
// Create a new task
router.post("/",authenticateToken, taskController.createTask);

// Get all tasks of a particular user
router.get("/",authenticateToken,taskController.getAllTasks);

// Get a single task by ID
router.get("/:id",authenticateToken,taskController.getTaskById );

//Get a tasks of single User by ID 
router.get("/user/:uid",authenticateToken,taskController.getTaskByUser);

// Update a task
router.put("/:id",authenticateToken, taskController.updateTask);

// Delete a task
router.delete("/:id",authenticateToken, taskController.deleteTask);

module.exports = router;