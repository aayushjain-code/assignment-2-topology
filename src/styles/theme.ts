// Theme configuration for the application
export const theme = {
  colors: {
    background: "#F5F6FC",
    card: {
      fill: "#F3F6FB",
      stroke: "#e0e7ef",
      shadow: "#e0e7ef",
    },
    text: {
      primary: "#222",
      secondary: "#333",
    },
    edge: {
      stroke: "#cbd5e1",
    },
    california: {
      containerStroke: "#b2dfdb",
      childFill: "#e3f2fd",
      childStroke: "#90caf9",
    },
    cisco: {
      tagFill: "#4caf50",
      tagText: "#fff",
    },
  },
  typography: {
    googleLabel: {
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "bold",
    },
    stateHeader: {
      fontSize: 14,
      fontFamily: "sans-serif",
      fontWeight: "bold",
    },
    ciscoTag: {
      fontSize: 11,
      fontFamily: "sans-serif",
      fontWeight: 500,
      letterSpacing: 1,
    },
    californiaChild: {
      fontSize: 8,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 5,
    md: 10,
    lg: 12,
    xl: 14,
  },
  shadows: {
    card: "drop-shadow(0 2px 8px #e0e7ef)",
    subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
} as const;

export type Theme = typeof theme;
