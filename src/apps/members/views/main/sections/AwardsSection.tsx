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
        <Typography css={st.title} variant="h6" color={Colors.text.varaint3}>
          {awards.title}
        </Typography>
        <div>
          <Typography color={Colors.text.varaint3} variant="subtitle2">
            {awards.desc1}
          </Typography>
          <Typography color={Colors.text.varaint3} variant="h5">
            {awards.desc2}
          </Typography>
        </div>
      </Stack>
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
};
