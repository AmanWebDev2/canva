import { RGBColor } from "react-color";

export function isText(type: string | undefined) {
  return type === "text" || type === "i-text" || type === "textbox";
}

export function rgbaObjectToString (rgba: RGBColor | "transparent") {
  if(rgba === "transparent") {
    return `rgba(0,0,0,0)`
  }

  const aplha = rgba.a === undefined ? 1 : rgba.a
  return `rgba(${rgba.r},${rgba.g},${rgba.b},${aplha})`
}