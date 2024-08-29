import express from "express";
import connectDB from "../config/db.js";
import taskRouter from "../routes/task.route.js";
import cors from "cors";
const port = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
