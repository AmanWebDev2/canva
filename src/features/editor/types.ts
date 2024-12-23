import { fabric } from "fabric";
import { ITextboxOptions } from "fabric/fabric-impl";
import * as material from "material-colors";

export const fonts = [
  "Arial",
  "Helvetica",
  "Courier New",
  "Georgia",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "Comic Sans MS",
  "Impact",
  "Lucida Console",
  "Lucida Sans Unicode",
  "Palatino Linotype",
  "Tahoma",
  "Geneva",
  "Garamond",
  "Courier",
  "Brush Script MT",
  "Bookman",
  "Book Antiqua",
  "Palatino",
  "Century Gothic",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Sans MS",
  "Franklin Gothic Medium",
  "Gill Sans",
];

export const selectionDependentTools = [
  "fill",
  "stroke-color",
  "stroke-width",
  "font",
  "opacity",
  "filter",
  "remove-bg",
];

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
export const STROKE_WIDTH = 5;
export const STROKE_DASH_ARRAY = [];
export const FONT_FAMILY = "Arial";
export const FONT_SIZE = 32;
export const FONT_WEIGHT = 400;

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

export const TEXT_OPTIONS = {
  type: "text",
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  fontSize: FONT_SIZE,
  fontFamily: FONT_FAMILY,
};

export type BuildEditorProps = {
  canvas: fabric.Canvas;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  selectedObjects: fabric.Object[];
  strokeDashArray: number[];
  fontFamily: string;
  setFontFamily: (font: string) => void;
  setFillColor: (color: string) => void;
  setStrokeColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
  setStrokeDashArray: (value: number[]) => void;
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
  getActiveFillColor: () => string;
  getActiveStrokeColor: () => string;
  getActiveStrokeWidth: () => number;
  getActiveFontFamily: () => string;
  getActiveFontWeight: () => number;
  getActiveFontStyle: () => string;
  getActiveFontLineThrough: () => boolean;
  getActiveFontUnderline: () => boolean;
  canvas: fabric.Canvas;
  strokeDashArray: number[];
  selectedObjects: fabric.Object[];
  changeStrokeDashArray: (value: number[]) => void;
  getActiveStrokeDashArray: () => number[];
  bringForward: () => void;
  sendBackwards: () => void;
  changeOpacity: (value: number) => void;
  getActiveOpacity: () => number;
  addText: (value: string, options?: ITextboxOptions) => void;
  changeFontFamily: (font: string) => void;
  changeFontWeight: (weight: number) => void;
  changeFontStyle: (style: string) => void;
  changeFontLineThrough: (value: boolean) => void;
  changeFontUnderline: (value: boolean) => void;
  changeTextAlign: (value: string) => void;
  getActiveTextAlign: () => string;
  changeFontSize: (size: number) => void;
  getActiveFontSize: () => number;
  delete: () => void;
}

export interface EditorHookProps {
  clearSelectionCallback?: () => void;
}
