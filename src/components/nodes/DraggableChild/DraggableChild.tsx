import React from "react";
import { useDrag } from "../../../hooks/useDrag";
import { theme, dimensions } from "../../../styles";

interface Child {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface DraggableChildProps {
  child: Child;
  onDrag: (id: string, dx: number, dy: number) => void;
}

const DraggableChild: React.FC<DraggableChildProps> = ({ child, onDrag }) => {
  const handleDrag = (dx: number, dy: number) => {
    onDrag(child.id, dx, dy);
  };

  const ref = useDrag({ onDrag: handleDrag, preventPropagation: true });

  const textStyles = {
    fontSize: theme.typography.californiaChild.fontSize,
    fontFamily: "sans-serif",
    fontWeight: "normal",
    fill: theme.colors.text.primary,
    textAnchor: "middle" as const,
    alignmentBaseline: "middle" as const,
    dominantBaseline: "middle" as const,
  };

  // Hexagon points for child nodes
  const hexWidth = dimensions.card.california.childWidth;
  const hexHeight = dimensions.card.california.childHeight;
  const centerX = child.x + hexWidth / 2;
  const centerY = child.y + hexHeight / 2;

  // Calculate hexagon points
  const points = [
    `${centerX},${child.y}`, // top
    `${child.x + hexWidth},${child.y + hexHeight * 0.25}`, // top-right
    `${child.x + hexWidth},${child.y + hexHeight * 0.75}`, // bottom-right
    `${centerX},${child.y + hexHeight}`, // bottom
    `${child.x},${child.y + hexHeight * 0.75}`, // bottom-left
    `${child.x},${child.y + hexHeight * 0.25}`, // top-left
  ].join(" ");

  return (
    <g ref={ref} style={{ cursor: "pointer" }}>
      <polygon
        points={points}
        fill={theme.colors.california.childFill}
        stroke={theme.colors.california.childStroke}
        strokeWidth={1}
      />
      <text x={centerX} y={centerY + 2} {...textStyles}>
        {child.label}
      </text>
    </g>
  );
};

export default DraggableChild;
