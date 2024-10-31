"use client";

import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

import { useEditor } from "@/features/editor/hooks/use-editor";

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
    <div className="h-full muted flex flex-col ">
      <div className="flex-1 h-full" ref={containerRef}>
        <canvas className="border-2" ref={canvasRef} />
      </div>
    </div>
  );
};

export default Editor;
