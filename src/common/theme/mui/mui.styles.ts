import { Colors } from "../options";

const highlightColor = Colors.brand.primaryShade2;
const idleBorderColor = Colors.border.primary;
const errorColor = Colors.error.primary;

// mui - 텍스트 필드 스타일
export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${idleBorderColor} !important`,

    transition: "border-color 0.3s ease-in-out",
  },

  "& .Mui-focused": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: `${highlightColor} !important`,
    },
  },

  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${highlightColor} !important`,
    },
  },

  "& .Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: `${errorColor} !important`,
    },
  },

  "& .Mui-disabled": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${idleBorderColor} !important`,
    },
  },
};
