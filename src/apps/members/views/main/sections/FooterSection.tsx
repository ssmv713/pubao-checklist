import { css } from "@emotion/react";
import { Button, Link, Stack, Typography } from "@mui/material";
import top from "@/assets/icons/top.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import arirang from "@/assets/logos/arirang.png";

type FooterSectionType = {
  handleScrollToTop: () => void;
};

export const FooterSection = ({ handleScrollToTop }: FooterSectionType) => {
  const { t } = useTranslation("footer");
  const kocis: string = t("kocis", { returnObjects: true });
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack css={st.root}>
      <Button css={st.button} onClick={handleScrollToTop}>
        <Stack direction="row" spacing="1.042vw">
          <Typography
            fontSize={isMedium ? "2.791vw" : "2.083vw"}
            fontWeight={400}
            color={Colors.common.white}
          >
            {t("top")}
          </Typography>
          <div css={st.top}>
            <Image src={top} alt="top" fill />
          </div>
        </Stack>
      </Button>

      <div>
        <Stack direction="row" spacing="11.979vw">
          <Stack alignItems={"center"} spacing="1.875vw">
            <Typography color={Colors.text.variant2} variant="body2">
              {"Host"}
            </Typography>
            <div css={st.kocis}>
              <Image src={kocis} alt="kocis" fill />
            </div>
          </Stack>
          <Stack alignItems={"center"} spacing="1.875vw">
            <Typography color={Colors.text.variant2} variant="body2">
              {"Oraganizer"}
            </Typography>
            <div css={st.arirang}>
              <Image src={arirang} alt="arirang" fill />
            </div>
          </Stack>
        </Stack>
        <Typography
          mt="3.646vw"
          variant="body2"
          fontWeight={700}
          color={Colors.common.white}
          textAlign="center"
        >
          {"© Copyright 2023 KOCIS ALL RIGHTS RESERVED"}
        </Typography>
      </div>
    </Stack>
  );
};

const st = {
  root: css`
    padding: 5.208vw 0;
    width: 100%;
    aspect-ratio: 1920 / 800;
    background: #010f21;
    align-items: center;
    justify-content: space-between;
  `,
  button: css`
    min-width: 19.896vw;
    padding: 2.604vw 1.5vw;
    border: 0.208vw solid #ffffff;
    border-radius: 5.208vw;
  `,
  top: css`
    position: relative;
    width: 2.5vw;
    height: 2.5vw;
  `,
  kocis: css`
    position: relative;
    width: 19.323vw;
    aspect-ratio: 371 / 97;
    @media ${Mq.md} {
      width: 24.651vw;
    }
  `,
  arirang: css`
    position: relative;
    width: 15.521vw;
    aspect-ratio: 298 / 78;
    @media ${Mq.md} {
      width: 19.767vw;
    }
  `,
};
