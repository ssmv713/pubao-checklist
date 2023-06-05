import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import { RulesItemsType } from "@/types/common.type";
import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import download from "@/assets/icons/download.png";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/dist/client/link";

type RulesSectionType = {
  RulesRef: React.RefObject<HTMLDivElement>;
};

export const RulesSection = ({ RulesRef }: RulesSectionType) => {
  const { t, i18n } = useTranslation("rules");
  const items: RulesItemsType[] = t("items", { returnObjects: true });
  const { isMedium } = useCustomMediaQuery();
  const hasMobileFooter =
    i18n.language === "ch" || i18n.language === "ko" || i18n.language === "sp";

  const isSpanish = i18n.language === "sp";
  const hasPadding =
    i18n.language === "vi" || i18n.language === "th" || i18n.language === "sp";

  const isChinese = i18n.language === "ch";
  return (
    <div css={st.root} ref={RulesRef} id="Rules">
      <Typography
        color={Colors.common.black}
        textAlign="center"
        fontSize={isMedium ? "6.512vw !important" : "2.917vw"}
        mb="2.719vw"
      >
        {t("title")}
      </Typography>
      <Stack
        direction={isMedium ? "column" : "row"}
        spacing={isMedium ? "4.083vw" : "2.083vw"}
        css={st.items(isChinese)}
      >
        {items.map((it, index) => (
          <Stack key={index} css={st.item}>
            <Typography css={st.card_title(it.title.color)}>
              {parse(it.title.text)}
            </Typography>
            <Stack spacing={isMedium ? "7.907vw" : "4.167vw"} css={st.card}>
              {it.card.map((list, index) => (
                <div key={index}>
                  <Typography
                    variant="h6"
                    color={Colors.common.black}
                    textAlign="center"
                  >
                    {list.rule}
                  </Typography>

                  <Typography
                    mt="1.042vw"
                    color={Colors.common.black}
                    variant="body1"
                    fontWeight={400}
                    textAlign="center"
                    css={st.px12}
                  >
                    {list.footnote}
                  </Typography>
                </div>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <div css={st.footnote(isSpanish)}>
        <Typography
          pl="0.833vw"
          color={Colors.common.black}
          variant="subtitle1"
          css={st.px10}
        >
          {isMedium && hasMobileFooter ? t("footnote_mobile") : t("footnote")}
        </Typography>
      </div>
      <Link href="https://portfolio.ureca.im/test/form.zip">
        <div css={st.buttonWrap}>
          <Button css={st.button}>
            <div css={st.download}>
              <Image src={download} alt="download" fill />
            </div>
            <Typography
              color={Colors.common.white}
              variant="subtitle2"
              fontWeight={700}
              css={isSpanish && st.px13}
            >
              {t("download")}
            </Typography>
          </Button>
        </div>
      </Link>
    </div>
  );
};

const st = {
  root: css`
    padding: 10.417vw 8.333vw;
    width: 100%;
    background: #f9f9f9;
    & .underline {
      text-decoration: underline;
      text-underline-position: under;
    }
  `,
  px13: css`
    font-size: 3.023vw !important;
  `,
  px12: css`
    @media ${Mq.md} {
      font-size: 2.791vw;
    }
  `,
  px10: css`
    @media ${Mq.md} {
      font-size: 2.326vw;
      text-align: center;
    }
  `,
  items: (isChinese: boolean) => css`
    width: 100%;
    align-items: stretch;
  `,
  item: css`
    width: 100%;
    align-items: center;
  `,
  card_title: (bgColor: string) => css`
    background: ${bgColor};
    min-width: 30.208vw;
    height: 7.396vw;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.875vw 1.5vw;
    color: #fff;
    font-size: 2.604vw;
    text-align: center;
    border-radius: 5.208vw;
    transform: translateY(4vw);
    @media ${Mq.md} {
      font-size: 4.651vw;
      padding: 3.256vw 5.116vw;
      height: 13.023vw;
      border-radius: 6.512vw;
    }
  `,
  card: css`
    padding: 7.292vw 0;
    align-items: center;
    box-shadow: 0vw 0.156vw 0.313vw rgba(0, 0, 0, 0.16);
    border-radius: 1.042vw;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    p,
    h6 {
      font-family: "ZCOOL XiaoWei", sans-serif !important;
      font-weight: 700;
    }
    /* & div:first-child h6,
    div:first-child p {
      font-family: "Noto Serif HK", serif !important;
    }
    & div:nth-child(2) h6,
    div:nth-child(2) p {
      font-family: "Noto Sans SC", sans-serif !important;
    }

    & div:nth-child(3) h6,
    div:nth-child(3) p {
      font-family: "Noto Serif SC", serif !important;
    }

    & div:last-child h6,
    div:last-child p {
      font-family: "ZCOOL XiaoWei", sans-serif;
    } */

    @media ${Mq.md} {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      & h6 {
        font-size: 3.721vw;
      }
    }
  `,
  footnote: (isSpanish: boolean) => css`
    list-style: square;
    margin: 3.646vw 0 10.417vw 0;
    display: flex;
    &::before {
      content: "*";
      font-size: 1.771vw;
      font-weight: 700;
      padding-top: 1vw;
      @media ${Mq.md} {
        content: ${isSpanish ? "''" : "'*'"};
      }
    }
  `,
  buttonWrap: css`
    display: flex;
    justify-content: center;
  `,
  button: css`
    background: #000;
    padding: 0 2.917vw;
    height: 4.792vw;
    display: flex;
    gap: 0.521vw;
    border-radius: 0.938vw;
    &:hover {
      background: #000;
    }
    @media ${Mq.md} {
      padding: 2.721vw 4.651vw;
      height: auto;
      border-radius: 1.395vw;
    }
  `,
  download: css`
    position: relative;
    width: 1.875vw;
    height: 1.875vw;
    @media ${Mq.md} {
      width: 4.651vw;
      height: 4.651vw;
    }
  `,
};
