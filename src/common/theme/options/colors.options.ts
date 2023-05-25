import { PaletteOptions } from "@mui/material";

/**
 * @desc
 * 모든 컬러는 Colors 객체 내부에 생성해야 합니다.
 */
export const Colors = {
  // 브랜드 컬러
  brand: {
    primary: "#5F0091",
    yellow: "#f3ff4c",
    lightGreen: "#74ff4b",
    mint: "#00E7FF",
    primaryShade1: "#2951D7dd",
    primaryShade2: "#2951D7bb",
  },

  // 텍스트 컬러
  text: {
    primary: "#546E7A",
    secondary: "#001356",
    variant1: "#44455f",
    variant3: "#c1c3f4",
    variant4: "#E5D0D0",
    variant5: "#EAEAEA",
    variant6: "#ffe7d6",
    variant7: "#010f21",
  },
  background: {
    variant2: "#ff6a00",
    variant3: "#292a3f",
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
