import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import inner from "@/assets/images/theme_inner.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import parse from "html-react-parser";

type ThemeSectionType = {
  OverviewRef: React.RefObject<HTMLDivElement>;
};

export const ThemeSection = ({ OverviewRef }: ThemeSectionType) => {
  const { t, i18n } = useTranslation("theme");
  const { isMedium } = useCustomMediaQuery();
  const isSmallerFont =
    i18n.language === "vi" ||
    i18n.language === "th" ||
    i18n.language === "sp" ||
    i18n.language === "en";
  return (
    <Stack spacing="6.771vw" css={st.root} ref={OverviewRef} id="Overview">
      <Stack spacing="2.083vw">
        <Typography fontSize={"2.917vw"} color={Colors.text.variant5}>
          {t("theme")}
        </Typography>
        <Typography
          css={st.title(isSmallerFont)}
          color={Colors.text.variant4}
          variant="h1"
        >
          {t("title")}
        </Typography>
      </Stack>
      <div css={st.inner}>
        <Image src={inner} alt="inner" fill />
      </div>
      <div>
        <Typography
          css={st.bottom(isSmallerFont)}
          color={Colors.text.variant4}
          variant="h3"
        >
          {isMedium ? parse(t("bottom_mobile")) : parse(t("bottom"))}
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
    background-size: cover;
    background-position: center;
    padding: 5.208vw 8.333vw;
    @media ${Mq.md} {
      padding: 11.163vw 8.372vw;
    }
  `,
  title: (isSmallerFont: boolean) => css`
    text-decoration: underline;
    text-underline-position: under;
    line-height: 1.5;
    @media ${Mq.md} {
      font-size: ${isSmallerFont ? "5.581vw !important" : "6.977vw"};
    }
  `,
  inner: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1600 / 1569;
  `,
  bottom: (isSmallerFont: boolean) => css`
    & span {
      font-weight: 700;
    }
    line-height: 1.5;
    @media ${Mq.md} {
      font-size: ${isSmallerFont ? "3.721vw !important" : "4.651vw"};
    }
  `,
};
