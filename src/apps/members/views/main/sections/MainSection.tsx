import { Header } from "@/apps/members/components/header";
import { css } from "@emotion/react";
import Image from "next/image";
import title from "@/assets/images/k-culture_title.png";
import { Button, Stack, Typography } from "@mui/material";
import download from "@/assets/icons/download.png";
import { Colors } from "@/common/theme";
import movie from "@/assets/images/movie.png";
import people from "@/assets/images/main_people.png";
import { useTranslation } from "react-i18next";

type MainSectionType = {
  mainRef: React.RefObject<HTMLDivElement>;
};

export const MainSection = ({ mainRef }: MainSectionType) => {
  const { t, i18n } = useTranslation("main");
  let imageWidth: string;
  let imageHeight: string;
  const currentLanguage = i18n.language;

  if (currentLanguage === "en") {
    imageWidth = "40.885vw";
    imageHeight = "19.896vw";
  } else if (currentLanguage === "ch") {
    imageWidth = "32.24vw";
    imageHeight = "21.615vw";
  } else if (currentLanguage === "vi") {
    imageWidth = "38.229vw";
    imageHeight = "24.167vw";
  } else if (currentLanguage === "th") {
    imageWidth = "43.177vw";
    imageHeight = "20.729vw";
  } else if (currentLanguage === "sp") {
    imageWidth = "42.5vw";
    imageHeight = "23.073vw";
  } else {
    imageWidth = "34.688vw";
    imageHeight = "21.302vw"; // 기본 값 설정
  }
  const title: string = t("title", { returnObjects: true });
  return (
    <Stack ref={mainRef} css={st.root} id="main">
      <div css={st.movie}>
        <Image src={movie} alt="movie" fill />
      </div>
      <div css={st.people}>
        <Image src={people} alt="people " fill />
      </div>

      <div css={st.title(imageWidth, imageHeight)}>
        <Image src={title} alt="title" fill />
      </div>
      <Button css={st.button}>
        <Stack direction="row" alignItems={"center"} spacing="0.938vw">
          <div css={st.download}>
            <Image src={download} alt="download" fill />
          </div>
          <Typography color={Colors.common.white} variant="subtitle2">
            {t("download")}
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

const st = {
  root: css`
    width: 100%;
    aspect-ratio: 1920 / 1080;
    /* height: 1080px; */
    background-image: url(/assets/images/main_bg.png);
    background-repeat: no-repeat;
    padding: 0 8.333vw;
    position: relative;
  `,
  movie: css`
    position: absolute;
    width: 36.25vw;
    aspect-ratio: 696 / 312;
    top: 8.854vw;
    right: 8.333vw;
  `,
  people: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 83.854vw;
    aspect-ratio: 1610 / 796;
  `,

  title: (imageWidth: string, imageHeight: string) => css`
    position: relative;
    /* width: 34.688vw;
    height: 21.302vw; */
    width: ${imageWidth};
    height: ${imageHeight};
    margin-top: 12.5vw;
    margin-bottom: 5.208vw;
  `,
  button: css`
    width: fit-content;
    padding: 1.458vw 3.281vw;

    background: ${Colors.brand.primary};
    &:hover {
      background: ${Colors.brand.primary};
    }
    & h6 {
      text-align: left;
    }
  `,
  download: css`
    position: relative;
    width: 1.875vw;
    height: 1.875vw;
  `,
};
