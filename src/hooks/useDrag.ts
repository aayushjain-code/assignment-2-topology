import { useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";

interface UseDragOptions {
  onDrag: (dx: number, dy: number) => void;
  onStart?: (event: d3.D3DragEvent<SVGGElement, unknown, unknown>) => void;
  preventPropagation?: boolean;
}

export const useDrag = ({
  onDrag,
  onStart,
  preventPropagation = false,
}: UseDragOptions) => {
  const ref = useRef<SVGGElement>(null);

  const handleDrag = useCallback(
    (event: d3.D3DragEvent<SVGGElement, unknown, unknown>) => {
      onDrag(event.dx, event.dy);
    },
    [onDrag]
  );

  const handleStart = useCallback(
    (event: d3.D3DragEvent<SVGGElement, unknown, unknown>) => {
      if (preventPropagation) {
        event.sourceEvent.stopPropagation();
      }
      onStart?.(event);
    },
    [onStart, preventPropagation]
  );

  useEffect(() => {
    if (ref.current) {
      const dragBehavior = d3
        .drag<SVGGElement, unknown>()
        .on("drag", handleDrag);

      if (onStart || preventPropagation) {
        dragBehavior.on("start", handleStart);
      }

      d3.select(ref.current).call(dragBehavior);
    }
  }, [handleDrag, handleStart, onStart, preventPropagation]);

  return ref;
};
