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

export const MainSection = () => {
  const { t, i18n } = useTranslation("main");
  const getImagePath = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === "ko") {
      return "/assets/images/k-culture-ko.png";
    } else if (currentLanguage === "en") {
      return "/assets/images/k-culture-en.png";
    }
    return "/assets/images/k-culture-ko.png";
  };

  const imagePath = getImagePath();
  return (
    <Stack css={st.root} spacing="5.208vw">
      <div css={st.movie}>
        <Image src={movie} alt="movie" fill />
      </div>
      <div css={st.people}>
        <Image src={people} alt="people " fill />
      </div>
      <div css={st.header}>
        <Header />
      </div>
      <div css={st.title}>
        <Image src={imagePath} alt="title" fill />
      </div>
      <Button css={st.button}>
        <Stack direction="row" alignItems={"center"} spacing="0.938vw">
          <Image src={download} alt="download" width={36} height={36} />
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
    top: 170px;
    right: 8.333vw;
  `,
  people: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 83.854vw;
    aspect-ratio: 1610 / 796;
  `,
  header: css`
    margin-top: 5.208vw;
  `,
  title: css`
    position: relative;
    width: 34.688vw;
    height: 21.302vw;
  `,
  button: css`
    width: fit-content;
    padding: 0 3.281vw;

    height: 4.792vw;
    background: ${Colors.brand.primary};
    &:hover {
      background: ${Colors.brand.primary};
    }
  `,
};
