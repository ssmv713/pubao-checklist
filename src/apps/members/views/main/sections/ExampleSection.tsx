import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Colors } from "@/common/theme";
import parse from "html-react-parser";
import { ExampleType } from "@/types/common.type";
import dots from "@/assets/images/dots.png";
import Image from "next/dist/client/image";

export const ExampleSection = () => {
  const { t } = useTranslation("example");
  const yellow: ExampleType = t("yellow", { returnObjects: true });
  const green: ExampleType = t("green", { returnObjects: true });

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
        <Typography fontSize={"2.292vw"} color={Colors.text.variant4}>
          {t("desc")}
        </Typography>
      </div>
      <Stack spacing={"4.021vw"}>
        <Stack css={st.yellowBox}>
          <Typography
            fontSize={"3.125vw"}
            color={Colors.common.black}
            fontWeight={700}
          >
            {yellow.title}
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
            >
              {green.title}
            </Typography>
            <Typography
              textAlign={"center"}
              fontSize={"1.875vw"}
              color={Colors.text.variant1}
            >
              {green.desc}
            </Typography>
          </Stack>
        </div>
        <div css={st.blueWrap}>
          <Stack css={st.blueBox}>
            <Typography
              fontSize={"3.125vw"}
              color={Colors.common.black}
              fontWeight={700}
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
          color={Colors.text.varaint3}
          css={st.bottom}
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
  `,
  example: css`
    & span {v
      font-weight: 700;
    }
  `,
  yellowBox: css`
    padding: 0 3.021vw;
    height: 10vw;
    background: ${Colors.brand.yellow};
    width: fit-content;
    border-radius: 10.417vw;
    align-items: center;
    justify-content: center;
    transform: rotate(-4.94deg);
    margin-left: 4.604vw;
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
  `,
  blueWrap: css``,
  blueBox: css`
    padding: 0 3.021vw;
    height: 6.875vw;
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
  `,
  bottomWrap: css`
    display: flex;
    justify-content: center;
  `,
  bottom: css`
    & span {
      font-weight: 700;
    }
  `,
};
