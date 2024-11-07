"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/use-editor";
import { Navbar } from "@/features/editor/components/navbar";
import { Sidebar } from "@/features/editor/components/sidebar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { Footer } from "./footer";
import { ActiveTool } from "../types";
import { ShapeSideBar } from "./shape-side-bar";

const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [activeTool, setActiveTool] = useState<ActiveTool>("select");

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (activeTool === tool) {
        return setActiveTool("select");
      }

      if (tool === "draw") {
      }

      if (activeTool === "draw") {
      }

      setActiveTool(tool);
    },
    [activeTool]
  );

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      preserveObjectStacking: true,
      controlsAboveOverlay: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  //  We are trying to make canvas responsive, whenever the container size changes, we need to update the canvas size
  return (
    <div className="h-full bg-muted flex flex-col ">
      <Navbar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar activeTool={activeTool} onChangeTool={onChangeActiveTool} />
        <ShapeSideBar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar />
          <div className="flex-1 h-[calc(100%-124px)]" ref={containerRef}>
            <canvas className="border-2" ref={canvasRef} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Editor;
