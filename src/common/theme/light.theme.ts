import { createTheme } from "@mui/material/styles";

import { textFieldStyle } from "./mui";
import {
  Colors,
  lightPalette,
  lightTypoOptions,
  muiBreakPoints,
  muiShape,
} from "./options";

const brandColorPrimary = Colors.brand.primary;

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: lightTypoOptions,
  breakpoints: muiBreakPoints,
  shape: muiShape,

  // 컴포넌트별 옵션 설정
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
        style: {
          borderBottom: `1px solid ${brandColorPrimary}`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          padding: "12px",
        },
        sizeMedium: {
          padding: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",

          // "&:hover": {
          //   color: Colors.brand.primaryShade1,
          // },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${brandColorPrimary}`,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: `0px 0px 2px ${brandColorPrimary}`,
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        disableEscapeKeyDown: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ...textFieldStyle,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        sx: {
          ...textFieldStyle,
        },
      },
    },
  },
});
