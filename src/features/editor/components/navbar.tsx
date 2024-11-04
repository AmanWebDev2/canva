import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/features/editor/components/logo";
import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";
import { BsCloudCheck } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { ActiveTool } from "../types";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({ activeTool, onChangeActiveTool }: NavbarProps) => {
  return (
    <nav className="h-[68px] bg-white flex items-center w-full gap-x-8 border-b lg:pl-[34px]">
      <Logo />
      <div className="flex items-center h-full gap-x-1">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              File
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem className="flex items-center gap-x-2">
              <CiFileOn className="!size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">
                  Open a JSON file
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" className="mx-2" />
        <Hint label="Select" side="bottom" sideOffset={10}>
          <Button
            variant="ghost"
            size="icon"
            className={cn(activeTool === "select" && "bg-gray-100")}
            onClick={() => onChangeActiveTool("select")}
          >
            <MousePointerClick />
          </Button>
        </Hint>
        <Hint label="Undo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" className="" onClick={() => {}}>
            <Undo2 />
          </Button>
        </Hint>
        <Hint label="Redo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" className="" onClick={() => {}}>
            <Redo2 />
          </Button>
        </Hint>
        <Separator orientation="vertical" className="mx-2" />
        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <div className="text-xs text-muted-foreground">Saved</div>
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2" />
      <div className="ml-auto flex items-center gap-x-4">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              Export
              <Download className="size-4 ml-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex items-center gapx2"
              onClick={() => {}}
            >
              <CiFileOn className="!size-8 " />
              <div>
                <p>JSON</p>
                <p className="text-xs text-muted-foreground">
                  Save for later editing
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gapx2"
              onClick={() => {}}
            >
              <CiFileOn className="!size-8 " />
              <div>
                <p>PNG</p>
                <p className="text-xs text-muted-foreground">
                  Best for sharing on the web
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gapx2"
              onClick={() => {}}
            >
              <CiFileOn className="!size-8 " />
              <div>
                <p>JPG</p>
                <p className="text-xs text-muted-foreground">
                  Best for printing
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gapx2"
              onClick={() => {}}
            >
              <CiFileOn className="!size-8 " />
              <div>
                <p>SVG</p>
                <p className="text-xs text-muted-foreground">
                  Best for editing in vector software
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
