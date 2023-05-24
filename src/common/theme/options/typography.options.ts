import { TypographyOptions } from "@mui/material/styles/createTypography";

import { Colors } from "./colors.options";

// Mui - 공통 타이포그래피 옵션
const baseTypographyOptions: TypographyOptions = {
  allVariants: {
    color: Colors.text.primary,
    whiteSpace: "pre-wrap",
  },
};

// Mui - Light 테마용 타이포그래피 옵션
export const lightTypoOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
