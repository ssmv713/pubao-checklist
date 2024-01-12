import Image from "next/image";
import Link from "next/link";

import bg from "@/assets/images/pubao_bg.jpeg";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";

export const AboutView = () => {
  return (
    <Stack css={st.root}>
      <div css={st.intro}>
        {"푸바오네 오신걸 환영합니다!\n다들 새해 복 많이 받으세요"}
      </div>

      <Link css={st.link} href="/">
        {" 체크리스트 보러가기(클릭!)"}
      </Link>
      <div css={st.bgContainer}>
        <Image src={bg} alt="가족" fill />
      </div>
    </Stack>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
  `,
  intro: css`
    margin-top: 40px;
    line-height: 1.5;
    font-size: 30px;
    font-family: "Hi Melody", sans-serif;
  `,
  link: css`
    color: #46289a;
    margin-top: 10px;
    text-decoration: underline;
  `,
  bgContainer: css`
    position: absolute;
    width: 500px;
    aspect-ratio: 527/936;
    z-index: -1;
  `,
};
