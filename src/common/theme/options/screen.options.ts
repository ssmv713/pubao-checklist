import { BreakpointsOptions } from "@mui/material";

/**
 * @desc
 * 반응형 기준
 */
export enum ScreenType {
  xs = 376, // isExtraSmall
  sm = 576, // isSmall
  md = 768, // isMedium
  lg = 1024, // isLarge
  xl = 1200, // isTablet
  xxl = 1440, // isLaptop
}

/**
 * @desc
 * Media Query 축약형
 */
export const Mq = {
  xs: `(max-width:${ScreenType.xs}px)`,
  sm: `(max-width:${ScreenType.sm}px)`,
  md: `(max-width:${ScreenType.md}px)`,
  lg: `(max-width:${ScreenType.lg}px)`,
  xl: `(max-width:${ScreenType.xl}px)`,
  xxl: `(max-width:${ScreenType.xxl}px)`,
};

// Mui - 반응형 옵션
export const muiBreakPoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: ScreenType.sm + 1,
    md: ScreenType.md + 1,
    lg: ScreenType.lg + 1,
    xl: ScreenType.xl + 1,
  },
};
