import { Router } from "express";
import { CreateTask, GetAllTask, UpdateTask,DeleteTask } from "../controller/task.controller.js";

const router = Router();

// create task
router.post("/", CreateTask)
router.get("/", GetAllTask)
router.patch("/:id", UpdateTask)
router.delete("/:id", DeleteTask)

export default router