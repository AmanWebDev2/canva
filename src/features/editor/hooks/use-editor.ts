import { useCallback, useMemo, useState } from "react";

import { fabric } from "fabric";
import { useAutoResize } from "./use-auto-resize";
import {
  BuildEditorProps,
  CIRCLE_OPTIONS,
  DIAMOND_OPTIONS,
  Editor,
  FILL_COLOR,
  RECTANGLE_OPTIONS,
  STROKE_COLOR,
  STROKE_WIDTH,
  TRIANGLE_OPTIONS,
} from "../types";
import { useCanvasEvents } from "./use-canvas-events";
import { isText } from "../utils";

const buildEditor = ({
  canvas,
  setFillColor,
  setStrokeWidth,
  fillColor,
  setStrokeColor,
  strokeColor,
  strokeWidth,
  selectedObjects
}: BuildEditorProps): Editor => {
  const getWorkspace = () => {
    return canvas.getObjects().find((object) => object.name === "clip");
  };
  const center = (object: fabric.Object) => {
    const workspace = getWorkspace();
    const center = workspace?.getCenterPoint();

    if (!center) return;

    // @ts-ignore
    canvas._centerObject(object, center);
  };

  const addToCanvas = (object: fabric.Object) => {
    // order is important
    center(object);
    canvas.add(object);
    canvas.setActiveObject(object);
  };
  return {
    changeFillColor: (color: string) => {
      setFillColor(color);
      canvas.getActiveObjects().forEach((object) => {
        object.set({ fill: color });
      });
      canvas.renderAll();
    },

    changeStrokeWidth: (width: number) => {
      setStrokeWidth(width);
      canvas.getActiveObjects().forEach((object) => {
        object.set({ strokeWidth: width });
      });
      canvas.renderAll();
    },
    changeStrokeColor: (color: string) => {
      canvas.getActiveObjects().forEach((object) => {
        // text type does not have stroke
        if (isText(object.type)) {
          object.set({ fill: color });
          return;
        }
        object.set({ stroke: color });
      });
      canvas.renderAll();
    },
    addCircle: () => {
      const object = new fabric.Circle({
        ...CIRCLE_OPTIONS,
      });

      addToCanvas(object);
    },
    addSoftRectangle: () => {
      const object = new fabric.Rect({
        ...RECTANGLE_OPTIONS,
        rx: 50,
        ry: 50,
      });

      addToCanvas(object);
    },
    addRectangle: () => {
      const object = new fabric.Rect({
        ...RECTANGLE_OPTIONS,
      });

      addToCanvas(object);
    },
    addTriangle: () => {
      const object = new fabric.Triangle({
        ...TRIANGLE_OPTIONS,
      });

      addToCanvas(object);
    },
    addInverseTriangle: () => {
      //  we can just change angle to 180, but the issue is that the triangle will be flipped and grab handles will be in the wrong place
      const HEIGHT = 400;
      const WIDTH = 400;
      const object = new fabric.Polygon(
        [
          { x: WIDTH, y: 0 },
          { x: WIDTH / 2, y: HEIGHT },
          { x: 0, y: 0 },
        ],
        {
          ...TRIANGLE_OPTIONS,
        }
      );
      addToCanvas(object);
    },
    addDiamond: () => {
      const HEIGHT = DIAMOND_OPTIONS.height;
      const WIDTH = DIAMOND_OPTIONS.width;
      const object = new fabric.Polygon(
        [
          { x: WIDTH / 2, y: 0 },
          { x: WIDTH, y: HEIGHT / 2 },
          { x: WIDTH / 2, y: HEIGHT },
          { x: 0, y: HEIGHT / 2 },
        ],
        {
          ...DIAMOND_OPTIONS,
        }
      );
      addToCanvas(object);
    },
    canvas,
    fillColor,
    strokeColor,
    strokeWidth,
  selectedObjects
  };
};

export const useEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [selectedObjects, setSelectedObjects] = useState<fabric.Object[]>([]);
  const [fillColor, setFillColor] = useState<string>(FILL_COLOR);
  const [strokeColor, setStrokeColor] = useState<string>(STROKE_COLOR);
  const [strokeWidth, setStrokeWidth] = useState<number>(STROKE_WIDTH);

  useAutoResize({ canvas, container });
  useCanvasEvents({
    canvas,
    setSelectedObjects,
  });

  const editor = useMemo(() => {
    if (canvas) {
      return buildEditor({
        canvas,
        fillColor,
        strokeColor,
        strokeWidth,
        setFillColor,
        setStrokeColor,
        setStrokeWidth,
        selectedObjects
      });
    }
    return null;
}, [canvas, fillColor, strokeColor, strokeWidth, selectedObjects]);

  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#fff",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });
      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      // object is not selectable, not hoverable, not scalable outside of the workspace
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);
    },
    []
  );
  return { init, editor };
};
