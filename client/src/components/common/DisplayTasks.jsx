import { ScrollArea } from "@/components/ui/scroll-area";
import PopOver from "./PopOver";

// eslint-disable-next-line react/prop-types
const DisplayTasks = ({tasks}) => {
  const AllTasks = [...tasks]
  console.log(AllTasks)
  return (
    <>
    {AllTasks && AllTasks.map(({task}, index) => (
      <div className="flex justify-center items-center gap-1" key={index}>
      <ScrollArea className="h-[100px] w-[70vw] mb-5 mx-2 rounded-md border p-4">
        {task}
      </ScrollArea>
      <PopOver />
    </div>
    // <p key={index}>{task}</p>
    ) )}
    </>
  );
};
export default DisplayTasks;
