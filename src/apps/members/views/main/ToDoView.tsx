import { useState } from "react";

import Link from "next/link";

import { css } from "@emotion/react";
import { Stack } from "@mui/material";

import { Content } from "./components/Content";
import { InputContainer } from "./components/InputContainer";

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
      <div css={st.whitePaper}>
        <div css={st.background}>
          <Stack css={st.centerContainer}>
            <Link href="#">
              <div css={st.aboutMe}>About Me!</div>
            </Link>
            <Stack>
              <div css={st.inner}>
                <InputContainer />
                <Content />
              </div>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    height: 100vh;
    width: 100%;
    overflow: scroll;
    background: #f7e08e;
    display: flex;
    justify-content: center;
  `,
  whitePaper: css`
    width: 800px;
    height: 800px;
    background-color: #fff;
    position: relative;
  `,
  background: css`
    position: absolute;
    top: 0;
    left: 0;
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
    /* border: solid 10px red; */
  `,
  centerContainer: css`
    position: relative;
    width: 600px;
  `,
  aboutMe: css`
    position: absolute;
    top: 140px;
    left: 40px;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    font-family: "Rubik Doodle Shadow";
  `,
  inner: css`
    width: 500px;
    height: 400px;
    border: solid 5px green;

    margin: 240px auto 0;
    padding: 15px 10px 15px 18px;
  `,
};
