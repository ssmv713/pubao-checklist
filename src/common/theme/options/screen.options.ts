import { BreakpointsOptions } from "@mui/material";

/**
 * @desc
 * 반응형 기준
 */
export enum ScreenType {
  xs = 376, // 최소 지원 디바이스 가로 길이
  sm = 576, // Mobile
  md = 768, // Medium Size Mobile
  lg = 1024, // Tablet
  xl = 1200, // Laptop
  xxl = 1440, // Large Laptop
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
