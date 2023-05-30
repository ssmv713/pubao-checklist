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
    "@media (max-width:768px)": {
      fontSize: "6.977vw", //30px
    },
  },
  h2: {
    fontSize: "4.167vw", //80px
    fontWeight: 400,
  },
  h3: {
    fontSize: "3.333vw", //64px
    fontWeight: 400,
    "@media (max-width:768px)": {
      fontSize: "4.651vw", //20px
    },
  },
  h4: {
    fontSize: "60px", //
    fontWeight: 700,
  },
  h5: {
    fontSize: "2.604vw", // 50px
    fontWeight: 700,

    "@media (max-width:768px)": {
      fontSize: "3.721vw", //16px
    },
  },
  h6: {
    fontSize: "2.188vw", //42px
    fontWeight: 700,
    "@media (max-width:768px)": {
      fontSize: "4.186vw", //18px
    },
  },
  subtitle1: {
    fontSize: "1.771vw",
    fontWeight: 700,
    "@media (max-width:768px)": {
      fontSize: "2.791vw ", //12px
    },
  },
  subtitle2: {
    fontSize: "1.563vw", //30px
    fontWeight: 400,
    "@media (max-width:768px)": {
      fontSize: "5.116vw", //22px
    },
  },
  body1: {
    fontSize: "1.354vw", // 26px
    fontWeight: 700,
    "@media (max-width:768px)": {
      fontSize: "3.488vw", //15px
    },
  },
  body2: {
    fontSize: "1.25vw",
    fontWeight: 400,
    "@media (max-width:768px)": {
      fontSize: "2.326vw", //10px
    },
  },
};

// Mui - Light 테마용 타이포그래피 옵션
export const lightTypoOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
