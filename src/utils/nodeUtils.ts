import { Node } from "../types/node";

export const findNodeById = (nodes: Node[], id: string): Node | undefined => {
  return nodes.find((node) => node.id === id);
};

export const updateNodePosition = (
  nodes: Node[],
  id: string,
  dx: number,
  dy: number
): Node[] => {
  return nodes.map((node) =>
    node.id === id ? { ...node, x: node.x + dx, y: node.y + dy } : node
  );
};

export const getGoogleNode = (nodes: Node[]): Node | undefined => {
  return nodes.find((node) => node.id === "google");
};

export const getStateNodes = (nodes: Node[]): Node[] => {
  return nodes.filter((node) => node.id !== "google");
};
