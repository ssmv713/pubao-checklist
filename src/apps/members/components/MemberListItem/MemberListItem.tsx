import { css } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";

import { MemberListItemModel } from "./model";

export type MemberListItemProps = {
  model: MemberListItemModel;
};

export const MemberListItem = ({ model }: MemberListItemProps) => {
  const { name, email, phone, profileImageUrl } = model;

  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Avatar src={profileImageUrl} alt={name} />

        <div css={st.textContainer}>
          <Typography variant={"h6"}>{name}</Typography>

          <div>
            <Typography>{email}</Typography>
            <Typography>{phone}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;

    padding: 16px;

    border-radius: 8px;
    border: 1px solid #ccc;
  `,
  inner: css`
    display: flex;
    gap: 16px;
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
};
