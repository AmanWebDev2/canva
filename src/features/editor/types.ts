import { fabric } from "fabric";
import * as material from "material-colors";

export const colors = [
  material.red["500"],
  material.pink["500"],
  material.purple["500"],
  material.deepPurple["500"],
  material.indigo["500"],
  material.blue["500"],
  material.lightBlue["500"],
  material.cyan["500"],
  material.teal["500"],
  material.green["500"],
  material.lightGreen["500"],
  material.lime["500"],
  material.yellow["500"],
  material.amber["500"],
  material.orange["500"],
  material.deepOrange["500"],
  material.brown["500"],
  material.grey["500"],
  material.blueGrey["500"],
  "transparent",
];

export type ActiveTool =
  | "templates"
  | "image"
  | "text"
  | "shapes"
  | "ai"
  | "settings"
  | "draw"
  | "fill"
  | "stroke-color"
  | "stroke-width"
  | "font"
  | "opacity"
  | "filter"
  | "remove-bg"
  | "select"
  | "templates";

export const FILL_COLOR = "rgba(0,0,0,1)";
export const STROKE_COLOR = "rgba(0,0,0,1)";
export const STROKE_WIDTH = 2;

export const CIRCLE_OPTIONS = {
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokWidth: STROKE_WIDTH,
  radius: 225,
  top: 100,
  left: 100,
};

export const RECTANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const DIAMOND_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const TRIANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export type BuildEditorProps = {
  canvas: fabric.Canvas;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  selectedObjects: fabric.Object[];
  setFillColor: (color: string) => void;
  setStrokeColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
};

export interface Editor {
  changeFillColor: (color: string) => void;
  changeStrokeWidth: (width: number) => void;
  changeStrokeColor: (color: string) => void;
  addCircle: () => void;
  addSoftRectangle: () => void;
  addRectangle: () => void;
  addTriangle: () => void;
  addInverseTriangle: () => void;
  addDiamond: () => void;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  canvas: fabric.Canvas;
  selectedObjects: fabric.Object[];
}
