import { useEffect, useState } from "react";

import Image from "next/image";

import searchBar from "@/assets/icons/searchBar.svg";
import { ListsType } from "@/types/lists.type";
import { css } from "@emotion/react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack } from "@mui/material";

export const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState<ListsType[]>([]);
  const [editingId, setEditingId] = useState();
  const [editText, setEditText] = useState();
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll = () => {
    const updatedCheckboxes = lists.map((checkbox) => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setLists(updatedCheckboxes);
    setSelectAll(!selectAll);
  };
  const startEditing = (lists) => {
    setEditingId(lists.id);
    setEditText(lists.title);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeEditText = (event) => {
    setEditText(event.target.value);
  };
  const cancelEditing = () => {
    setEditingId(undefined);
  };
  useEffect(() => {
    getTodo();
  }, []);
  const saveTodo = async (id) => {
    const res = await fetch(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ShimSooMang",
        },
        body: JSON.stringify({
          title: editText,
          done: false,
        }),
      }
    );
    const data = await res.json();

    setEditingId(undefined);

    setLists([...lists, data]);
  };
  const getTodo = async () => {
    // alert("데이터 가져오기");
    const res = await fetch(
      "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ShimSooMang",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setLists([...lists, ...data]);
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
          username: "KDT7_ShimSooMang",
        },
        body: JSON.stringify({
          title: inputValue,
        }),
      }
    );
    const data = await res.json();

    setLists([...lists, data]);
    setInputValue("");

    // console.log(lists);
    // return json;
  };
  const handleDelete = async (id) => {
    const res = await fetch(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ShimSooMang",
        },
      }
    );

    setLists(lists.filter((list) => list.id !== id));
  };

  console.log(lists.map((it) => it.title));
  return (
    <Stack>
      <div css={st.root}>
        <Stack direction="row" css={st.searchLeft}>
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
          <input checked={selectAll} type="checkbox" css={st.checkbox} />
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

      <Stack gap="20px" css={st.listsContainer}>
        {lists.map((lists, index) => (
          <Stack css={st.listRow} key={index} direction="row">
            <Stack direction="row" alignItems={"center"} css={st.listLeft}>
              <input type="checkbox" css={st.checkbox} />
              {editingId === lists.id ? (
                <input
                  css={st.editInput}
                  type="text"
                  onChange={handleChangeEditText}
                  value={editText}
                  checked={lists.done}
                />
              ) : (
                <div css={st.title}>{lists.title}</div>
              )}
            </Stack>
            <Stack direction="row" alignItems={"center"}>
              {editingId === lists.id ? (
                <>
                  <IconButton onClick={cancelEditing}>
                    <CloseIcon />
                  </IconButton>
                  <IconButton onClick={() => saveTodo(lists.id)}>
                    <CheckIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={() => startEditing(lists)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(lists.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}

              <DragIndicatorIcon sx={{ color: "#0000008a" }} />
            </Stack>
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
  searchLeft: css`
    flex: 1;
  `,
  input: css`
    margin-left: 20px;
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
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
  `,
  listLeft: css`
    flex: 1;
  `,
  title: css`
    margin-left: 18px;
  `,
  editInput: css`
    margin-left: 18px;
    flex: 1;
  `,
  listsContainer: css`
    height: 250px;
    padding-top: 6px;
    overflow: scroll;
  `,
};
