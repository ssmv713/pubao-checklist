import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import { useTranslation } from "react-i18next";
import { AwardsCategoryType, AwardsType } from "@/types/common.type";
import parse from "html-react-parser";
import { stringify } from "querystring";

type AwardsSectionType = {
  AwardsRef: React.RefObject<HTMLDivElement>;
};

export const AwardsSection = ({ AwardsRef }: AwardsSectionType) => {
  const { t, i18n } = useTranslation("awards");
  const awards: AwardsType = t("awards", { returnObjects: true });
  const category: AwardsCategoryType = t("category", { returnObjects: true });
  const { isMedium } = useCustomMediaQuery();
  const isSmallerFont = i18n.language === "en" || i18n.language === "th";
  let grid_template_columns: string;
  const currentLanguage = i18n.language;
  if (currentLanguage === "en") {
    grid_template_columns = "30% 30% 40%";
  } else if (currentLanguage === "vi") {
    grid_template_columns = "30% 32% 38%";
  } else if (currentLanguage === "th") {
    grid_template_columns = "42% 33% 25%";
  } else if (currentLanguage === "sp") {
    grid_template_columns = "26% 35% 39%";
  } else {
    grid_template_columns = "1fr 1fr 1fr";
  }
  return (
    <Stack
      css={st.root}
      spacing={isMedium ? "12.093vw" : "5.208vw"}
      ref={AwardsRef}
      id="Prize"
    >
      <Stack direction={isMedium ? "column" : "row"}>
        <Typography css={st.title} variant="h6" color={Colors.text.variant3}>
          {awards.title}
        </Typography>
        <div>
          <Typography
            css={st.px16(isSmallerFont)}
            color={Colors.text.variant5}
            variant="subtitle2"
          >
            {awards.desc1}
          </Typography>
          <Typography
            css={st.px22(isSmallerFont)}
            color={Colors.text.variant5}
            variant="h5"
          >
            {awards.desc2}
          </Typography>
        </div>
      </Stack>
      <Stack direction={isMedium ? "column" : "row"}>
        <Typography css={st.title} variant="h6" color={Colors.text.variant3}>
          {category.title}
        </Typography>
        <Typography
          css={st.px16(isSmallerFont)}
          color={Colors.text.variant5}
          variant="subtitle2"
        >
          {category.desc}
        </Typography>
      </Stack>
      <div>
        <Stack
          direction={isMedium ? "column" : "row"}
          spacing={isMedium ? "11.163vw" : "5.208vw"}
          css={st.items}
        >
          {category.items.map((it, index) => (
            <Stack spacing={"1.563vw"} key={index} css={st.item}>
              <Typography
                color={Colors.text.variant5}
                variant="body1"
                fontWeight={400}
              >
                {parse(it.desc)}
              </Typography>
              {/* 테이블 */}
              <Stack css={st.table}>
                {/* <Stack css={st.table} spacing="0.208vw"> */}
                <div css={st.table_row(grid_template_columns)}>
                  {it.table.header.map((list, index) => (
                    <Typography key={index} css={st.beige_bg}>
                      {list}
                    </Typography>
                  ))}
                </div>
                {it.table.content.map((row, index) => (
                  <div key={index} css={st.table_row(grid_template_columns)}>
                    <Typography css={st.beige_bg}>{row.title}</Typography>
                    <Typography css={st.sky_bg}>{row.award}</Typography>
                    <Typography css={st.sky_bg}>{row.amount}</Typography>
                  </div>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack mt="3.125vw">
          {category.footnote.map((note, index) => (
            <Typography
              variant="body2"
              color={Colors.text.variant5}
              key={index}
            >
              {note}
            </Typography>
          ))}
        </Stack>
      </div>
    </Stack>
  );
};

const st = {
  root: css`
    background: ${Colors.background.variant3};
    padding: 10.417vw 8.333vw;
    & .bold {
      font-weight: 700;
    }
  `,
  px16: (isSmallerFont: boolean) => css`
    @media ${Mq.md} {
      font-size: ${isSmallerFont ? "2.791vw !important" : "3.721vw"};
    }
  `,
  px22: (isSmallerFont: boolean) => css`
    @media ${Mq.md} {
      font-size: ${isSmallerFont ? "4.651vw" : "5.116vw;"};
    }
  `,
  title: css`
    width: 26.042vw;
    @media ${Mq.md} {
      margin-bottom: 4.651vw;
      width: 46.042vw;
    }
  `,
  items: css`
    width: 100%;
  `,
  item: css`
    width: 100%;
  `,
  table: css`
    font-size: 1.354vw;
    gap: 4px;
  `,
  table_row: (grid_template_columns: string) => css`
    display: grid;
    width: 100%;

    grid-template-columns: ${grid_template_columns};
    grid-gap: 4px;
  `,
  beige_bg: css`
    background: #eaeaea;
    text-align: center;
    color: ${Colors.text.variant7};
    padding: 0.417vw 0;
    @media ${Mq.md} {
      font-size: 3.023vw;
      padding: 1vw 0;
    }
  `,
  sky_bg: css`
    background: #bae6ff;
    text-align: center;
    color: ${Colors.text.variant7};
    font-weight: 400;
    padding: 0.417vw 0;
    @media ${Mq.md} {
      font-size: 3.023vw;
      padding: 1vw 0;
    }
  `,
};
