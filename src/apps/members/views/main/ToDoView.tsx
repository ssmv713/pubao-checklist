import { useState } from "react";

import Link from "next/link";

import { css } from "@emotion/react";
import { Stack } from "@mui/material";

// import titleLogo from
export const TodoView = () => {
  const [list, setList] = useState("");

  async function createTodo() {
    const res = await fetch(
      "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
          username: "KDT7_ParkYoungWoong",
        },
        body: JSON.stringify({
          title: "아침 먹기!",
        }),
      }
    );
    const json = await res.json();
    console.log(json);
    setList(json.title);
    console.log(list);
    return json;
  }
  createTodo();
  return (
    <div css={st.root}>
      <div css={st.background}>
        <Stack css={st.centerContainer}>
          <Link href="#">
            <div css={st.aboutMe}>About Me!</div>
          </Link>
          <Stack>
            <div css={st.inner}></div>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

const st = {
  root: css`
    height: 100vh;
    width: 100%;
    overflow: scroll;
    background: #f5d872;
    display: flex;
    justify-content: center;
  `,
  background: css`
    width: 800px;
    height: 800px;
    margin-top: -60px;
    background-image: url(/assets/images/post-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    border: solid 10px red;
  `,
  centerContainer: css`
    position: relative;
    width: 600px;
    border: solid 10px blue;
  `,
  aboutMe: css`
    position: absolute;
    top: 140px;
    left: 20px;
    font-weight: 700;
    font-size: 20px;
  `,
  inner: css`
    /* width: 100%;
    height: 300px;
    border: solid 5px blue;
    margin-top: 300px; */
  `,
};
