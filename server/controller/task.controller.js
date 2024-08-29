import Task from "../model/task.model.js";

const CreateTask = async (req, res) => {
  try {
    const { task, completed } = req.body;
    console.log(task, completed);
    const data = await Task.create({ task, completed });
    return res.json({ data, message: "Task created successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const GetAllTask = async (req, res) => {
  try {
    const data = await Task.find().sort({createdAt: -1})
    return res.json( data );
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const data = await Task.findByIdAndUpdate(id, { task });
    return res.json({ data, message: "Task updated successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
}

const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Task.findByIdAndDelete(id);
    return res.json({ data, message: "Task deleted successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export { CreateTask, GetAllTask, UpdateTask, DeleteTask };
