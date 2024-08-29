import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Edit, Pencil, Trash2 } from "lucide-react";

const PopOver = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline"><Edit/></Button>
      </PopoverTrigger>
      <PopoverContent className="w-min flex gap-2 justify-between">
        <Button variant="outline" className="flex gap-2"><Pencil size={14} /> Edit</Button>
        <Button variant="destructive" className="flex gap-2"><Trash2 size={14} /> Delete</Button>
      </PopoverContent>
    </Popover>
  );
};
export default PopOver;
