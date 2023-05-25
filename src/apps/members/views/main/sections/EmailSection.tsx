import { Colors } from "@/common/theme";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const EmailSection = () => {
  const { t } = useTranslation("email");
  return (
    <div css={st.root}>
      <Stack css={st.inner} spacing="5.208vw">
        <Stack direction="row" spacing="3.802vw">
          <Typography
            css={st.title}
            color={Colors.common.white}
            fontSize="2.917vw"
            fontWeight={700}
          >
            {t("send")}
          </Typography>
          <Typography
            color={Colors.common.white}
            fontSize="2.917vw"
            fontWeight={700}
          >
            {"contest@lbizkorea.co.kr"}
          </Typography>
        </Stack>
        <Stack direction="row" spacing="3.802vw">
          <Typography
            css={st.title}
            color={Colors.common.white}
            fontSize="2.917vw"
            fontWeight={700}
          >
            {t("inquiry")}
          </Typography>
          <Typography
            color={Colors.common.white}
            fontSize="2.917vw"
            fontWeight={700}
          >
            {"support@lbizkorea.co.kr"}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    background-image: url(/assets/images/email_bg.png);
    width: 100%;
    aspect-ratio: 1920 / 1218;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  inner: css`
    width: fit-content;
    background: rgba(27, 27, 27, 0.32);
    padding: 6.25vw;
  `,
  title: css`
    width: 18.958vw;
    padding: 0.677vw 0;
    text-align: center;
    background: #010f21;
    box-shadow: 0px 6px 6px rgba(241, 241, 241, 0.15);
    border-radius: 5.208vw;
  `,
};
