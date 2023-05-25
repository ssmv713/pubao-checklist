import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Colors } from "@/common/theme";
import { useTranslation } from "react-i18next";
import { AwardsCategoryType, AwardsType } from "@/types/common.type";

export const AwardsSection = () => {
  const { t } = useTranslation("awards");
  const awards: AwardsType = t("awards", { returnObjects: true });
  const category: AwardsCategoryType = t("category", { returnObjects: true });
  return (
    <Stack css={st.root} spacing="5.208vw">
      <Stack direction="row">
        <Typography css={st.title} variant="h6" color={Colors.text.variant3}>
          {awards.title}
        </Typography>
        <div>
          <Typography color={Colors.text.variant5} variant="subtitle2">
            {awards.desc1}
          </Typography>
          <Typography color={Colors.text.variant5} variant="h5">
            {awards.desc2}
          </Typography>
        </div>
      </Stack>
      <Stack direction="row">
        <Typography css={st.title} variant="h6" color={Colors.text.variant3}>
          {category.title}
        </Typography>
        <Typography color={Colors.text.variant5} variant="subtitle2">
          {category.desc}
        </Typography>
      </Stack>
      <div>
        <Stack spacing="5.208vw" direction="row" css={st.items}>
          {category.items.map((it, index) => (
            <Stack spacing="1.563vw" key={index} css={st.item}>
              <Typography color={Colors.text.variant5} variant="body1">
                {it.desc}
              </Typography>
              {/* 테이블 */}
              <Stack css={st.table}>
                {/* <Stack css={st.table} spacing="0.208vw"> */}
                <div css={st.table_row}>
                  {it.table.header.map((list, index) => (
                    <Typography key={index} css={st.beige_bg}>
                      {list}
                    </Typography>
                  ))}
                </div>
                {it.table.content.map((row, index) => (
                  <div key={index} css={st.table_row}>
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
  `,
  title: css`
    width: 26.042vw;
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
  table_row: css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
  `,
  beige_bg: css`
    background: #eaeaea;
    text-align: center;
    color: ${Colors.text.variant7};
    padding: 0.417vw 0;
  `,
  sky_bg: css`
    background: #bae6ff;
    text-align: center;
    color: ${Colors.text.variant7};
    font-weight: 400;
    padding: 0.417vw 0;
  `,
};
