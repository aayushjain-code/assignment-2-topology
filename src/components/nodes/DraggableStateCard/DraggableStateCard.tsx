import React from "react";
import { useDrag } from "../../../hooks/useDrag";
import {
  dimensions,
  theme,
  getCardStyles,
  getTextStyles,
  getCiscoTagStyles,
  getCiscoTagTextStyles,
  getDraggableGroupStyles,
} from "../../../styles";
import { Node } from "../../../types/node";

interface DraggableStateCardProps {
  node: Node;
  onDrag: (id: string, dx: number, dy: number) => void;
  sites: string[];
  cardWidth: number;
  cardHeight: number;
}

const DraggableStateCard: React.FC<DraggableStateCardProps> = ({
  node,
  onDrag,
  sites,
  cardWidth,
  cardHeight,
}) => {
  const handleDrag = (dx: number, dy: number) => {
    onDrag(node.id, dx, dy);
  };

  const ref = useDrag({ onDrag: handleDrag });

  const cardStyles = getCardStyles("state");
  const headerTextStyles = getTextStyles("state");
  const ciscoTagStyles = getCiscoTagStyles();
  const ciscoTagTextStyles = getCiscoTagTextStyles();

  // Calculate positions relative to card's top-left corner
  const cardX = node.x - cardWidth / 2;
  const cardY = node.y - cardHeight / 2;

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

      {/* Site Hexagons - inline hexagon shapes */}
      {sites.map((site, i) => {
        const hexWidth = 30; // Smaller hexagons for state cards
        const hexHeight = 20;
        const hexGap = 8; // Smaller gap for better fit
        const startX = cardX + 15; // Start with some margin from left
        const hexX = startX + i * (hexWidth + hexGap);
        const hexY = cardY + 50; // Position below the header

        // Calculate hexagon points
        const centerX = hexX + hexWidth / 2;
        const centerY = hexY + hexHeight / 2;

        const points = [
          `${centerX},${hexY}`, // top
          `${hexX + hexWidth},${hexY + hexHeight * 0.25}`, // top-right
          `${hexX + hexWidth},${hexY + hexHeight * 0.75}`, // bottom-right
          `${centerX},${hexY + hexHeight}`, // bottom
          `${hexX},${hexY + hexHeight * 0.75}`, // bottom-left
          `${hexX},${hexY + hexHeight * 0.25}`, // top-left
        ].join(" ");

        return (
          <g key={site}>
            <polygon
              points={points}
              fill="#fff"
              stroke="#cbd5e1"
              strokeWidth={1}
            />
            <text
              x={centerX}
              y={centerY + 1}
              fontSize={6}
              fontFamily="monospace"
              fill={theme.colors.text.secondary}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {site}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default DraggableStateCard;
