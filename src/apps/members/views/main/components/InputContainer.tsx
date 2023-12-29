import Image from "next/image";

import searchBar from "@/assets/icons/searchBar.svg";
import { css } from "@emotion/react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Stack } from "@mui/material";

export const InputContainer = () => {
  const handleAdd = () => {
    alert("added!");
  };
  return (
    <div css={st.root}>
      <Stack direction="row">
        <Image src={searchBar} alt="searchBar" />
        <input
          css={st.input}
          type="text"
          placeholder="새로운 할일을 작성하세요."
        />
      </Stack>
      <AddCircleRoundedIcon css={st.addIcon} onClick={handleAdd} />
    </div>
  );
};

const st = {
  root: css`
    /* width: 100%; */
    height: 50px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #e1e1e164;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  input: css`
    margin-left: 20px;
    border: none;
    background: transparent;
    outline: none;
  `,
  addIcon: css`
    color: #f5d872;
    font-size: 40px;
    cursor: pointer;
  `,
};
