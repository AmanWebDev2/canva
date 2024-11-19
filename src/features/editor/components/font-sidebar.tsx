"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ActiveTool, Editor, fonts } from "../types";
import { ToolbarSidebarClose } from "./tool-sidebar-close";
import { ToolSidebarHeader } from "./tool-sidebar-header";
import { Button } from "@/components/ui/button";

interface FontSidebarProps {
  editor: Editor | null;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const FontSidebar = ({
  activeTool,
  onChangeActiveTool,
  editor,
}: FontSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  const activeFont = editor?.getActiveFontFamily();

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col border-4 ",
        activeTool === "font" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader title="Font" description="Change the text font" />
      <ScrollArea>
        <div className="p-4 space-y-6 borderb">
          {fonts.map((font) => {
            return (
              <Button
                variant="secondary"
                key={font}
                size="lg"
                className={cn(
                  "w-full h-16 justify-start text-left",

                  activeFont === font && "border-2 border-blue-500"
                )}
                onClick={() => editor?.changeFontFamily(font)}
                style={{
                  fontFamily: font,
                  fontSize: 16,
                  padding: "16px",
                }}
              >
                {font}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
      <ToolbarSidebarClose onClick={onClose} />
    </aside>
  );
};
