import React, { useState } from "react";
import DraggableChild from "../DraggableChild/DraggableChild";
import { useDrag } from "../../../hooks/useDrag";
import {
  dimensions,
  getTextStyles,
  getDraggableGroupStyles,
  getCardStyles,
} from "../../../styles";
import { CALIFORNIA_CHILDREN } from "../../../data/initialData";
import { Node } from "../../../types/node";

interface Child {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface CaliforniaSitesProps {
  node: Node;
  onDrag: (id: string, dx: number, dy: number) => void;
  siteData: string[];
  cardWidth: number;
  cardHeight: number;
}

const CaliforniaSites: React.FC<CaliforniaSitesProps> = ({ node, onDrag }) => {
  const [children, setChildren] = useState<Child[]>(CALIFORNIA_CHILDREN);

  const handleDrag = (dx: number, dy: number) => {
    onDrag(node.id, dx, dy);
  };

  const ref = useDrag({ onDrag: handleDrag });

  const handleChildDrag = (id: string, dx: number, dy: number): void => {
    setChildren((children) =>
      children.map((child) => {
        if (child.id !== id) return child;
        let newX = child.x + dx;
        let newY = child.y + dy;
        // Clamp within container
        newX = Math.max(
          0,
          Math.min(
            dimensions.card.california.containerWidth -
              dimensions.card.california.childWidth,
            newX
          )
        );
        newY = Math.max(
          30,
          Math.min(
            dimensions.card.california.containerHeight -
              dimensions.card.california.childHeight,
            newY
          )
        ); // 30 to avoid title
        return { ...child, x: newX, y: newY };
      })
    );
  };

  const headerTextStyles = getTextStyles("state");
  const cardStyles = getCardStyles("california");

  // Calculate positions relative to card's top-left corner
  const cardX = node.x - dimensions.card.california.containerWidth / 2;
  const cardY = node.y - dimensions.card.california.containerHeight / 2;

  return (
    <g ref={ref} style={getDraggableGroupStyles()}>
      <rect x={cardX} y={cardY} {...cardStyles} />

      {/* Green Cisco Badge in top left */}
      <rect
        x={cardX}
        y={cardY}
        width={40}
        height={20}
        rx={2}
        fill="#4caf50"
        stroke="#45a049"
        strokeWidth={1}
      />

      <text
        x={cardX + 18}
        y={cardY + 10}
        fontSize={8}
        fontFamily="sans-serif"
        fontWeight="500"
        fill="#ffffff"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Cisco
      </text>

      {/* Header - positioned to the right of the badge on same line */}
      <text
        x={cardX + 45}
        y={cardY + 10}
        fontSize={10}
        fontFamily="sans-serif"
        fontWeight="bold"
        fill="#222"
        textAnchor="start"
        alignmentBaseline="middle"
      >
        {node.label}
      </text>
      {children.map((child) => (
        <DraggableChild
          key={child.id}
          child={{
            ...child,
            x: child.x + cardX,
            y: child.y + cardY,
          }}
          onDrag={handleChildDrag}
        />
      ))}
    </g>
  );
};

export default CaliforniaSites;
