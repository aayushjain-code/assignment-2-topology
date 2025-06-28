import { theme } from "./theme";
import { dimensions } from "./dimensions";

// Style utility functions
export const getCardStyles = (type: "google" | "state" | "california") => {
  if (type === "california") {
    return {
      width: dimensions.card.california.containerWidth,
      height: dimensions.card.california.containerHeight,
      borderRadius: dimensions.borderRadius.md,
      fill: theme.colors.card.fill,
      stroke: theme.colors.california.containerStroke,
      strokeWidth: 1,
      filter: `drop-shadow(0 2px 4px ${theme.colors.card.shadow})`,
    };
  }

  const cardDimensions = dimensions.card[type];
  return {
    width: cardDimensions.width,
    height: cardDimensions.height,
    borderRadius: cardDimensions.radius,
    fill: theme.colors.card.fill,
    stroke: theme.colors.card.stroke,
    strokeWidth: 1,
    filter: `drop-shadow(0 2px 4px ${theme.colors.card.shadow})`,
  };
};

export const getTextStyles = (
  type: "google" | "state" | "california" | "ciscoTag"
) => {
  const typographyMap = {
    google: theme.typography.googleLabel,
    state: theme.typography.stateHeader,
    california: theme.typography.stateHeader,
    ciscoTag: theme.typography.ciscoTag,
  };

  const textConfig = typographyMap[type];
  return {
    fontSize: textConfig.fontSize,
    fontFamily: textConfig.fontFamily || "sans-serif",
    fontWeight: textConfig.fontWeight || "normal",
    fill: theme.colors.text.primary,
    textAnchor: "middle" as const,
    alignmentBaseline: "middle" as const,
    dominantBaseline: "middle" as const,
    letterSpacing: "letterSpacing" in textConfig ? textConfig.letterSpacing : 0,
  };
};

export const getCiscoTagStyles = () => ({
  width: dimensions.ciscoTag.width,
  height: dimensions.ciscoTag.height,
  borderRadius: dimensions.ciscoTag.radius,
  fill: theme.colors.cisco.tagFill,
  stroke: theme.colors.cisco.tagText,
  strokeWidth: 1,
});

export const getCiscoTagTextStyles = () => ({
  fontSize: theme.typography.ciscoTag.fontSize,
  fontFamily: theme.typography.ciscoTag.fontFamily,
  fontWeight: theme.typography.ciscoTag.fontWeight,
  fill: theme.colors.cisco.tagText,
  textAnchor: "middle" as const,
  alignmentBaseline: "middle" as const,
  dominantBaseline: "middle" as const,
  letterSpacing: theme.typography.ciscoTag.letterSpacing,
});

export const getEdgeStyles = () => ({
  stroke: theme.colors.edge.stroke,
  strokeDasharray: "6,4",
  strokeWidth: 2,
});

export const getContainerStyles = () => ({
  width: "100vw",
  height: "100vh",
  background: theme.colors.background,
  overflow: "auto" as const,
});

export const getCanvasStyles = () => ({
  width: dimensions.canvas.width,
  height: dimensions.canvas.height,
  display: "block" as const,
  margin: "0 auto",
});

export const getDraggableGroupStyles = () => ({
  cursor: "move" as const,
});

// Position calculation utilities
export const getCardPosition = (
  x: number,
  y: number,
  type: "google" | "state" | "california"
) => {
  if (type === "california") {
    return {
      x: x - dimensions.card.california.containerWidth / 2,
      y: y - dimensions.card.california.containerHeight / 2,
    };
  }

  const cardDimensions = dimensions.card[type];
  return {
    x: x - cardDimensions.width / 2,
    y: y - cardDimensions.height / 2,
  };
};

export const getTextPosition = (
  x: number,
  y: number,
  type: "google" | "state" | "california"
) => {
  const typographyMap = {
    google: theme.typography.googleLabel,
    state: theme.typography.stateHeader,
    california: theme.typography.stateHeader,
  };

  const textConfig = typographyMap[type];
  const yOffset = (textConfig as any).yOffset ?? 0;
  return {
    x: x,
    y: y + yOffset,
  };
};

export const getCiscoTagPosition = (x: number, y: number) => {
  return {
    x: x - dimensions.ciscoTag.width / 2,
    y: y - dimensions.ciscoTag.height / 2,
  };
};

export const getCiscoTagTextPosition = (x: number, y: number) => {
  return {
    x: x,
    y: y,
  };
};
