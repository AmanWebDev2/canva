import { useCallback, useEffect } from "react";
import { fabric } from "fabric";

interface useAutoResizeProps {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
}

export const useAutoResize = ({ canvas, container }: useAutoResizeProps) => {
  const autoZoom = useCallback(() => {
    if (!canvas || !container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.setWidth(width);
    canvas.setHeight(height);

    const center = canvas.getCenter();
    const zoomRatio = 0.85;

    const localworkspace = canvas
      .getObjects()
      .find((obj) => obj.name === "clip");

    // @ts-ignore
    const scale = fabric.util.findScaleToFit(localworkspace, { width, height });
    const zooom = zoomRatio * scale;
    canvas.setViewportTransform(fabric.iMatrix.concat());

    canvas.zoomToPoint(new fabric.Point(center.left, center.top), zooom);

    if (!localworkspace) return;

    const workspaceCenter = localworkspace.getCenterPoint();
    const viewPortTransform = canvas.viewportTransform;

    if (
      canvas.width === undefined ||
      canvas.height === undefined ||
      !viewPortTransform
    )
      return;

    viewPortTransform[4] =
      canvas.width / 2 - workspaceCenter.x * viewPortTransform[0];
    viewPortTransform[5] =
      canvas.height / 2 - workspaceCenter.y * viewPortTransform[3];

    canvas.setViewportTransform(viewPortTransform);

    localworkspace.clone((cloned: fabric.Rect) => {
      canvas.clipPath = cloned;
      canvas.requestRenderAll();
    });
  }, [canvas, container]);

  useEffect(() => {
    let resizeObserver: ResizeObserver;
    if (canvas && container) {
      resizeObserver = new ResizeObserver(() => {
        autoZoom();
      });
      resizeObserver.observe(container);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canvas, container]);
};