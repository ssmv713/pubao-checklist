import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import inner from "@/assets/images/theme_inner.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Colors } from "@/common/theme";
import parse from "html-react-parser";

type ThemeSectionType = {
  OverviewRef: React.RefObject<HTMLDivElement>;
};

export const ThemeSection = ({ OverviewRef }: ThemeSectionType) => {
  const { t } = useTranslation("theme");
  return (
    <Stack spacing="6.771vw" css={st.root} ref={OverviewRef}>
      <Stack spacing="2.083vw">
        <Typography fontSize={"2.917vw"} color={Colors.text.variant5}>
          {t("theme")}
        </Typography>
        <Typography css={st.title} color={Colors.text.variant4} variant="h1">
          {t("title")}
        </Typography>
      </Stack>
      <div css={st.inner}>
        <Image src={inner} alt="inner" fill />
      </div>
      <div>
        <Typography css={st.bottom} color={Colors.text.variant4} variant="h3">
          {parse(t("bottom"))}
        </Typography>
      </div>
    </Stack>
  );
};

const st = {
  root: css`
    width: 100%;
    aspect-ratio: 1920 / 2607;
    background-image: url(/assets/images/theme_bg.png);
    padding: 5.208vw 8.333vw;
  `,
  title: css`
    text-decoration: underline;
    text-underline-position: under;
  `,
  inner: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1600 / 1569;
  `,
  bottom: css`
    & span {
      font-weight: 700;
    }
  `,
};
