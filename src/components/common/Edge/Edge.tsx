import React from "react";
import { dimensions, getEdgeStyles } from "../../../styles";
import { Node } from "../../../types/node";
import { Edge } from "../../../data/initialData";

interface EdgeComponentProps {
  edge: Edge;
  sourceNode: Node;
  targetNode: Node;
}

const EdgeComponent: React.FC<EdgeComponentProps> = ({
  edge,
  sourceNode,
  targetNode,
}) => {
  // Get the appropriate dimensions for each node type
  const getNodeDimensions = (node: Node) => {
    if (node.id === "google") {
      return {
        width: dimensions.card.google.width,
        height: dimensions.card.google.height,
      };
    } else if (node.id === "ca") {
      return {
        width: dimensions.card.california.containerWidth,
        height: dimensions.card.california.containerHeight,
      };
    } else {
      return {
        width: dimensions.card.state.width,
        height: dimensions.card.state.height,
      };
    }
  };

  const sourceDimensions = getNodeDimensions(sourceNode);
  const targetDimensions = getNodeDimensions(targetNode);

  return (
    <line
      x1={sourceNode.x}
      y1={sourceNode.y + sourceDimensions.height / 2}
      x2={targetNode.x}
      y2={targetNode.y - targetDimensions.height / 2}
      {...getEdgeStyles()}
    />
  );
};

export default EdgeComponent;
