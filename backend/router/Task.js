const express = require("express");
const router = express.Router();
const task = require("../controller/Task");

router.get("/api/task", task.getTask);
router.post("/api/task_create", task.createTask);
router.put("/api/task_update/:id", task.editTask);
router.delete("/api/task_delete/:id", task.deleteTask);

module.exports = router