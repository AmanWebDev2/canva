import {
  LayoutTemplate,
  ImageIcon,
  Pencil,
  Presentation,
  Sparkles,
  Sparkle,
  Shapes,
  Settings,
  Type,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { ActiveTool } from "../types";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeTool: (tool: ActiveTool) => void;
}

export const Sidebar = ({ activeTool, onChangeTool }: SidebarProps) => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
      <ul className="flex flex-col">
        <SidebarItem
          icon={LayoutTemplate}
          label="Design"
          isActive={activeTool === "templates"}
          onClick={() => onChangeTool("templates")}
        />
        <SidebarItem
          icon={ImageIcon}
          label="Image"
          isActive={activeTool === "image"}
          onClick={() => onChangeTool("image")}
        />
        <SidebarItem
          icon={Type}
          label="Text"
          isActive={activeTool === "text"}
          onClick={() => onChangeTool("text")}
        />
        <SidebarItem
          icon={Shapes}
          label="Shapes"
          isActive={activeTool === "shapes"}
          onClick={() => onChangeTool("shapes")}
        />
        <SidebarItem
          icon={Sparkles}
          label="AI"
          isActive={activeTool === "ai"}
          onClick={() => onChangeTool("ai")}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={activeTool === "settings"}
          onClick={() => onChangeTool("settings")}
        />
      </ul>
    </aside>
  );
};
