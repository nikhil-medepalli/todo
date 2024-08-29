import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayTasks from "./DisplayTasks";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    await axios.post("http://localhost:8000/api/tasks", {
      task: task
    })
    setTask("");
  }


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
  });
  }, [task]);

  return (
    <>
      <div className="w-[70vw] mx-auto my-10">
        <Textarea
          placeholder="Type your message here."
          className="border-2 border-gray-300"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* Add tool tip to the button */}
        <Button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded " onClick={handleSubmit}>
          <Plus className="mr-2" />
          Add Task
        </Button>
      </div>
      <DisplayTasks tasks={tasks}/>
    </>
  );
};
export default AddTask;
