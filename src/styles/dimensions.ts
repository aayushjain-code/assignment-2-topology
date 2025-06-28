// Layout and measurement constants
export const dimensions = {
  card: {
    google: {
      width: 160,
      height: 100,
      radius: 12,
      labelY: 0,
      logoY: 40,
    },
    state: {
      width: 180,
      height: 100,
      radius: 12,
    },
    california: {
      containerWidth: 400,
      containerHeight: 100,
      childWidth: 35,
      childHeight: 20,
    },
  },
  canvas: {
    width: 1400,
    height: 600,
  },
  googleLogo: {
    width: 56,
    height: 56,
  },
  ciscoTag: {
    width: 100,
    height: 28,
    radius: 14,
  },
  spacing: {
    ciscoTagPadding: 20,
    textPadding: 24,
  },
  borderRadius: {
    sm: 5,
    md: 10,
    lg: 12,
    xl: 14,
  },
} as const;

export type Dimensions = typeof dimensions;
