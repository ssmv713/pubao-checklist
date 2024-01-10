import { useEffect, useState } from "react";

import Image from "next/image";

import searchBar from "@/assets/icons/searchBar.svg";
import { css } from "@emotion/react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack } from "@mui/material";

export const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState<string[]>([]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const res = await fetch(
      "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ShimSoMang",
        },
      }
    );
    const json = await res.json();
    console.log(json);
  };

  const createTodo = async () => {
    if (inputValue === "") {
      alert("내용을 입력해 주세요");
      return;
    }
    const res = await fetch(
      "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ShimSoMang",
        },
        body: JSON.stringify({
          title: inputValue,
        }),
      }
    );
    const json = await res.json();

    setLists([...lists, json.title]);
    setInputValue("");
    console.log(json);
    console.log(lists);
    // return json;
  };
  const handleDelete = () => {
    alert("delete");
  };
  return (
    <Stack>
      <div css={st.root}>
        <Stack direction="row">
          <Image src={searchBar} alt="searchBar" />
          <input
            onChange={handleChange}
            css={st.input}
            type="text"
            value={inputValue}
            placeholder="새로운 할일을 작성하세요."
          />
        </Stack>
        <AddCircleRoundedIcon onClick={createTodo} css={st.addIcon} />
      </div>
      <Stack direction="row" css={st.topRow}>
        <Stack direction="row">
          <input type="checkbox" css={st.checkbox} />
          <Stack
            gap="12px"
            css={st.radioButtons}
            direction="row"
            alignItems={"center"}
          >
            <input
              css={st.radio}
              type="radio"
              id="all"
              name="filter"
              value="all"
            />
            <label htmlFor="all">전체</label>
            <input
              css={st.radio}
              type="radio"
              id="finished"
              name="filter"
              value="finished"
            />
            <label htmlFor="all">한일</label>
            <input
              css={st.radio}
              type="radio"
              id="unfinished"
              name="filter"
              value="unfinished"
            />
            <label htmlFor="all">안한일</label>
          </Stack>
        </Stack>
        <div>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Stack>
      <Stack gap="20px">
        {lists.map((title, index) => (
          <Stack css={st.listRow} key={index} direction="row">
            <Stack direction="row" alignItems={"center"}>
              <input type="checkbox" css={st.checkbox} />
              <div css={st.title}>{title}</div>
            </Stack>
            <DragIndicatorIcon sx={{ color: "#0000008a" }} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
// inputValue
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
    /* color: #f5d872; */
    color: #27945a;
    font-size: 40px;
    cursor: pointer;
  `,
  topRow: css`
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
    padding-bottom: 2px;
    border-bottom: solid 1px #ccc;
  `,
  checkbox: css`
    transform: scale(2);
    margin-right: 10px;
    accent-color: #27945a;
  `,
  radioButtons: css`
    margin-left: 20px;
  `,
  radio: css`
    transform: scale(1.5);
    accent-color: #27945a;
    margin: 0;
  `,
  listRow: css`
    padding-left: 20px;
    padding-right: 18px;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
  `,
  title: css`
    margin-left: 18px;
  `,
};
