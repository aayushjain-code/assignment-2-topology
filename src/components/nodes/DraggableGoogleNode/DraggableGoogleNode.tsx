import React from "react";
import GoogleLogo from "../../common/GoogleLogo";
import { useDrag } from "../../../hooks/useDrag";
import {
  dimensions,
  getCardStyles,
  getTextStyles,
  getDraggableGroupStyles,
} from "../../../styles";
import { Node } from "../../../types/node";

interface DraggableGoogleNodeProps {
  node: Node;
  onDrag: (id: string, dx: number, dy: number) => void;
}

const DraggableGoogleNode: React.FC<DraggableGoogleNodeProps> = ({
  node,
  onDrag,
}) => {
  const handleDrag = (dx: number, dy: number) => {
    onDrag(node.id, dx, dy);
  };

  const ref = useDrag({ onDrag: handleDrag });

  const cardStyles = getCardStyles("google");
  const textStyles = getTextStyles("google");

  // Calculate positions relative to card's top-left corner
  const cardX = node.x - dimensions.card.google.width / 2;
  const cardY = node.y - dimensions.card.google.height / 2;

  return (
    <g ref={ref} style={getDraggableGroupStyles()}>
      <rect x={cardX} y={cardY} {...cardStyles} />

      {/* Green Cisco Badge in top left */}
      <rect
        x={cardX}
        y={cardY}
        width={40}
        height={20}
        rx={0}
        fill="#4c59af"
        stroke="#4c59af"
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
        fill="#05143A"
        textAnchor="start"
        alignmentBaseline="middle"
      >
        Google
      </text>

      {/* Google Logo - centered in the card */}
      <g
        transform={`translate(${
          cardX + dimensions.card.google.width / 2 - 28
        },${cardY + dimensions.card.google.height / 2 - 28})`}
      >
        <GoogleLogo />
      </g>
    </g>
  );
};

export default DraggableGoogleNode;
