import { PaletteOptions } from "@mui/material";

/**
 * @desc
 * 모든 컬러는 Colors 객체 내부에 생성해야 합니다.
 */
export const Colors = {
  // 브랜드 컬러
  brand: {
    primary: "#2951D7",
    primaryShade1: "#2951D7dd",
    primaryShade2: "#2951D7bb",
  },

  // 텍스트 컬러
  text: {
    primary: "#546E7A",
    secondary: "#001356",
  },

  // 회색 계통
  gray: {
    shade800: "#242424",
    shade700: "#292929",
    shade600: "#6E6E6E",
    shade500: "#989898",
    shade400: "#BBBBBB",
    shade300: "#DADADA",
    shade200: "#EEEEEE",
    shade100: "#F7F7F7",
    shade50: "#FEFEFE",
  },

  // 공통 테두리 컬러
  border: {
    primary: "#e0e0e0",
    secondary: "#e0e0e099",
  },

  // 에러 컬러
  error: {
    primary: "#d32f2f",
  },

  // 공통
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
};

// Mui - Light 테마용 팔레트 옵션
export const lightPalette: PaletteOptions = {
  primary: {
    main: Colors.brand.primary,
  },
  secondary: {
    main: Colors.gray.shade200,
  },
  text: {
    primary: Colors.text.primary,
    secondary: Colors.text.secondary,
  },
};
