import { cn } from "@/lib/utils";
import { ActiveTool, Editor, FILL_COLOR } from "../types";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { ToolbarSidebarClose } from "./tool-sidebar-close";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShapeTool } from "./shape-tool";
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { ColorPicker } from "./color-picker";

interface FillColorSidebarProps {
  editor: Editor | null;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const FillColorSidebar = ({
  activeTool,
  onChangeActiveTool,
  editor,
}: FillColorSidebarProps) => {

  const value = editor?.fillColor || FILL_COLOR

  const onClose = () => {
    onChangeActiveTool("select");
  };

  const onChange = (color: string) => {
    editor?.changeFillColor(color);
  }

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col border-4 ",
        activeTool === "fill" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Fill color"
        description="Fill color to your element"
      />
      <ScrollArea>
         <div className="p-4 space-y-6">
          <ColorPicker 
            onChange={onChange}
            value={value}
          />
         </div>
      </ScrollArea>
      <ToolbarSidebarClose onClick={onClose} />
    </aside>
  );
};
