"use client";

import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/use-editor";
import { Navbar } from "@/features/editor/components/navbar";
import { Sidebar } from "@/features/editor/components/sidebar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { Footer } from "./footer";

const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      preserveObjectStacking: true,
      controlsAboveOverlay: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });
  }, [init]);

  //  We are trying to make canvas responsive, whenever the container size changes, we need to update the canvas size
  return (
    <div className="h-full bg-muted flex flex-col ">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar />
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
