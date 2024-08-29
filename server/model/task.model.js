import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Task = model('Task', taskSchema);

export default Task;