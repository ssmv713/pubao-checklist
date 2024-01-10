import Link from "next/link";

import { Stack } from "@mui/material";

export const AboutView = () => {
  return (
    <Stack>
      푸바오 체크리스트를 소개합니다!
      <Link href="/">체크리스트 보러가기</Link>
    </Stack>
  );
};
