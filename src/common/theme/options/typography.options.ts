import { TypographyOptions } from "@mui/material/styles/createTypography";

import { Colors } from "./colors.options";

// Mui - 공통 타이포그래피 옵션
const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",

  allVariants: {
    color: Colors.text.primary,
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "5.208vw", //100px
    fontWeight: 400,
  },
  h2: {
    fontSize: "4.167vw", //80px
    fontWeight: 400,
  },
  h3: {
    fontSize: "3.333vw", //64px
    fontWeight: 400,
  },
  h4: {
    fontSize: "60px", //
    fontWeight: 700,
  },
  h5: {
    fontSize: "2.604vw", // 50px
    fontWeight: 700,
  },
  h6: {
    fontSize: "2.188vw", //42px
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "1.771vw",
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: "1.563vw", //30px
    fontWeight: 400,
  },
  body1: {
    fontSize: "1.354vw", // 26px
    fontWeight: 700,
  },
  body2: {
    fontSize: "1.25vw",
    fontWeight: 400,
  },
};

// Mui - Light 테마용 타이포그래피 옵션
export const lightTypoOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
