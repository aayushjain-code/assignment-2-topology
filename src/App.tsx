import React, { useState } from "react";
import CaliforniaSites from "./components/nodes/CaliforniaSites";
import DraggableGoogleNode from "./components/nodes/DraggableGoogleNode";
import DraggableStateCard from "./components/nodes/DraggableStateCard";
import EdgeComponent from "./components/common/Edge";
import { dimensions, getContainerStyles, getCanvasStyles } from "./styles";
import { INITIAL_NODES, EDGES, SITE_DATA } from "./data/initialData";
import {
  updateNodePosition,
  getGoogleNode,
  getStateNodes,
  findNodeById,
} from "./utils/nodeUtils";
import { Node } from "./types/node";

const App: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(INITIAL_NODES);

  const handleDrag = (id: string, dx: number, dy: number): void => {
    setNodes((currentNodes) => updateNodePosition(currentNodes, id, dx, dy));
  };

  const googleNode = getGoogleNode(nodes);
  const stateNodes = getStateNodes(nodes);

  return (
    <div style={getContainerStyles()}>
      <svg style={getCanvasStyles()}>
        {/* Canvas Border */}
        <rect
          x={0}
          y={0}
          width={dimensions.canvas.width}
          height={dimensions.canvas.height}
          fill="none"
          stroke="#e0e7ef"
          strokeWidth={2}
          rx={8}
        />

        {/* Edges */}
        {EDGES.map((edge, index) => {
          const sourceNode = findNodeById(nodes, edge.source);
          const targetNode = findNodeById(nodes, edge.target);

          if (!sourceNode || !targetNode) return null;

          return (
            <EdgeComponent
              key={`${edge.source}-${edge.target}-${index}`}
              edge={edge}
              sourceNode={sourceNode}
              targetNode={targetNode}
            />
          );
        })}

        {/* Google Node */}
        {googleNode && (
          <DraggableGoogleNode node={googleNode} onDrag={handleDrag} />
        )}

        {/* State Cards */}
        {stateNodes.map((node) =>
          node.id === "ca" ? (
            <CaliforniaSites
              key={node.id}
              node={node}
              onDrag={handleDrag}
              siteData={SITE_DATA.ca}
              cardWidth={dimensions.card.state.width}
              cardHeight={dimensions.card.state.height}
            />
          ) : (
            <DraggableStateCard
              key={node.id}
              node={node}
              onDrag={handleDrag}
              sites={SITE_DATA[node.id] || []}
              cardWidth={dimensions.card.state.width}
              cardHeight={dimensions.card.state.height}
            />
          )
        )}
      </svg>
    </div>
  );
};

export default App;
