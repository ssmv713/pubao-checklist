import { css } from "@emotion/react";
import { Stack } from "@mui/material";

export const Content = () => {
  return (
    <Stack>
      <Stack direction="row" css={st.topRow}>
        <input type="checkbox" css={st.checkbox} />
        <Stack direction="row" alignItems={"center"}>
          <input
            css={st.radio}
            type="radio"
            id="all"
            name="filter"
            value="all"
            checked
          />
          <label htmlFor="all">전체</label>
          <input type="radio" id="finished" name="filter" value="finished" />
          <label htmlFor="all">한일</label>
          <input
            type="radio"
            id="unfinished"
            name="filter"
            value="unfinished"
          />
          <label htmlFor="all">안한일</label>
        </Stack>
      </Stack>
    </Stack>
  );
};

const st = {
  topRow: css`
    padding: 0 20px;
    margin-top: 20px;
  `,
  checkbox: css`
    transform: scale(2);
  `,
  radio: css`
    transform: scale(1.5);
    accent-color: #27945a;
    /* accent-color: #d99400; */
  `,
};
