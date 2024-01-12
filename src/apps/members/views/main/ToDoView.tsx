import Link from "next/link";

import { css } from "@emotion/react";
import { Stack } from "@mui/material";

import { Content } from "./components/Content";

// import titleLogo from
export const TodoView = () => {
  return (
    <div css={st.root}>
      <div css={st.whitePaper}>
        <div css={st.background}>
          <Stack css={st.centerContainer}>
            <Link href="/about">
              <div css={st.aboutUs}>About Us!</div>
            </Link>
            <Stack>
              <div css={st.inner}>
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
    height: 740px;
    background-color: #fff;
    position: relative;
    @media (max-width: 800px) {
      width: 100%; //30px
    }
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
    @media (max-width: 800px) {
      width: 100%; //30px
    }
  `,
  centerContainer: css`
    position: relative;
    width: 600px;
    @media (max-width: 600px) {
      width: 100%; //30px
    }
  `,
  aboutUs: css`
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
    /* border: solid 5px green; */

    margin: 240px auto 0;
    padding: 15px 10px 15px 18px;
    @media (max-width: 500px) {
      width: 100%; //30px
    }
  `,
};
