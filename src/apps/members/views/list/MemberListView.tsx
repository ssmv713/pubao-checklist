import { css } from "@emotion/react";
import { Typography } from "@mui/material";

import {
  MemberListItem,
  MemberListItemModel,
} from "../../components/MemberListItem";

export type MemberListViewProps = {
  models: MemberListItemModel[];
};

export const MemberListView = ({ models }: MemberListViewProps) => {
  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Typography variant={"h4"}>{"멤버 목록"}</Typography>

        <div css={st.list}>
          {models.map((it) => (
            <MemberListItem key={it.id} model={it} />
          ))}
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    gap: 48px;

    width: 100%;
    max-width: 1080px;

    margin: 100px 0;
  `,

  list: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
};
