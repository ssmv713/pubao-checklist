import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import parse from "html-react-parser";
import { ExampleType } from "@/types/common.type";
import dots from "@/assets/images/dots.png";
import Image from "next/dist/client/image";

export const ExampleSection = () => {
  const { t, i18n } = useTranslation("example");
  const yellow: ExampleType = t("yellow", { returnObjects: true });
  const green: ExampleType = t("green", { returnObjects: true });
  const { isMedium } = useCustomMediaQuery();
  const isSmallerFont =
    i18n.language === "en" || i18n.language === "sp" || i18n.language === "th";
  const is12px =
    i18n.language === "sp" || i18n.language === "vi" || i18n.language === "th";
  return (
    <Stack spacing="5.208vw" css={st.root}>
      <div>
        <Typography
          css={st.example}
          fontSize={"2.292vw"}
          color={Colors.text.variant4}
        >
          {parse(t("example"))}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={"2.292vw"}
          color={Colors.text.variant4}
        >
          {t("desc")}
        </Typography>
      </div>
      <Stack spacing={isMedium ? "13vw" : "9vw"}>
        <Stack css={st.yellowBox}>
          <Typography
            fontSize={"3.125vw"}
            color={Colors.common.black}
            fontWeight={700}
            textAlign="center"
            css={st.px16}
          >
            {isMedium && yellow.hasOwnProperty("title_mobile")
              ? yellow.title_mobile
              : yellow.title}
          </Typography>
          <Typography fontSize={"1.875vw"} color={Colors.text.variant1}>
            {yellow.desc}
          </Typography>
        </Stack>
        <div css={st.greenWrap}>
          <Stack css={st.greenbox}>
            <Typography
              fontSize={"3.125vw"}
              color={Colors.text.variant1}
              fontWeight={700}
              css={st.px16}
            >
              {green.title}
            </Typography>
            <Typography
              textAlign={"center"}
              fontSize={"1.875vw"}
              color={Colors.text.variant1}
              css={st.px14(is12px)}
            >
              {isMedium && green.hasOwnProperty("desc_mobile")
                ? green.desc_mobile
                : green.desc}
            </Typography>
          </Stack>
        </div>
        <div css={st.blueWrap}>
          <Stack css={st.blueBox}>
            <Typography
              fontSize={"3.125vw"}
              color={Colors.common.black}
              fontWeight={700}
              textAlign="center"
            >
              {t("blue")}
            </Typography>
          </Stack>
        </div>
      </Stack>
      <div css={st.dotsWrap}>
        <div css={st.dots}>
          <Image src={dots} alt="dots" fill />
        </div>
      </div>
      <div css={st.bottomWrap}>
        <Typography
          textAlign={"center"}
          variant="h2"
          color={Colors.text.variant3}
          css={st.bottom(isSmallerFont)}
        >
          {parse(t("bottom"))}
        </Typography>
      </div>
    </Stack>
  );
};

const st = {
  root: css`
    padding: 5.208vw 8.333vw;
    width: 100%;
    background: ${Colors.text.variant1};
    @media ${Mq.md} {
      padding: 13.023vw 8.372vw;
    }
  `,
  example: css`
    & span {
      font-weight: 700;
    }
  `,
  px16: css`
    @media ${Mq.md} {
      font-size: 3.721vw !important;
    }
  `,
  px14: (is12px: boolean) => css`
    @media ${Mq.md} {
      font-size: ${is12px ? "2.791vw !important" : "3.256vw !important"};
      font-weight: 400;
    }
  `,
  yellowBox: css`
    padding: 2vw 3.021vw;
    /* height: 10vw; */
    background: ${Colors.brand.yellow};
    width: fit-content;
    border-radius: 10.417vw;
    align-items: center;
    justify-content: center;
    transform: rotate(-4.94deg);
    margin-left: 4.604vw;
    @media ${Mq.md} {
      padding: 2vw 4.021vw;
    }
  `,
  greenWrap: css`
    display: flex;
    justify-content: flex-end;
  `,
  greenbox: css`
    padding: 0 3.021vw;
    height: 12.083vw;
    background: ${Colors.brand.lightGreen};
    width: fit-content;
    border-radius: 10.417vw;
    align-items: center;
    justify-content: center;
    transform: rotate(7.58deg);
    @media ${Mq.md} {
      padding: 2vw 4.021vw;
      height: auto;
    }
  `,
  blueWrap: css``,
  blueBox: css`
    padding: 1.406vw 3.021vw;
    /* height: 6.875vw; */
    background: ${Colors.brand.mint};
    width: fit-content;
    border-radius: 10.417vw;
    justify-content: center;
    transform: rotate(-4.09deg);
    margin-left: 3.604vw;
  `,
  dotsWrap: css`
    display: flex;
    justify-content: center;
  `,
  dots: css`
    position: relative;
    width: 0.417vw;
    height: 13.802vw;
    @media ${Mq.md} {
      width: 0.6vw;
    }
  `,
  bottomWrap: css`
    display: flex;
    justify-content: center;
  `,
  bottom: (isSmallerFont: boolean) => css`
    & span {
      font-weight: 700;
    }
    @media ${Mq.md} {
      font-size: ${isSmallerFont && "3.721vw"};
    }
  `,
};
