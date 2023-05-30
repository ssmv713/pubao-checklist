import { Header } from "@/apps/members/components/header";
import { css } from "@emotion/react";
import Image from "next/image";
import title from "@/assets/images/k-culture_title.png";
import { Button, Stack, Typography } from "@mui/material";
import download from "@/assets/icons/download.png";
import { Colors } from "@/common/theme";
import movie from "@/assets/images/movie.png";
import people from "@/assets/images/main_people_mobile.png";
import { useTranslation } from "react-i18next";
import arirang from "@/assets/logos/arirang.png";

type MainSectionType = {
  mainRef: React.RefObject<HTMLDivElement>;
};

export const MobileMainSection = ({ mainRef }: MainSectionType) => {
  const { t, i18n } = useTranslation("main");
  let imageWidth: string;
  let aspectRatio: string;
  const currentLanguage = i18n.language;

  if (currentLanguage === "en") {
    imageWidth = "75.047vw";
    aspectRatio = "785 / 382";
  } else if (currentLanguage === "ch") {
    imageWidth = "65.047vw";
    aspectRatio = "619 / 415";
  } else if (currentLanguage === "vi") {
    imageWidth = "75vw";
    aspectRatio = "734 / 464";
  } else if (currentLanguage === "th") {
    imageWidth = "75vw";
    aspectRatio = "829 / 398";
  } else if (currentLanguage === "sp") {
    imageWidth = "75.047vw";
    aspectRatio = "816 / 443";
  } else {
    imageWidth = "75.047vw";
    aspectRatio = "666 / 409"; // 기본 값 설정
  }

  const kocis_black: string = t("kocis_black", { returnObjects: true });

  const title: string = t("title", { returnObjects: true });
  return (
    <Stack ref={mainRef} css={st.root} id="main">
      <div css={st.people}>
        <Image src={people} alt="people " fill />
      </div>
      <Stack direction="row" spacing={"4.419vw"}>
        <div css={st.kocis}>
          <Image src={kocis_black} alt="kocis" fill />
        </div>
        <div css={st.arirang}>
          <Image src={arirang} alt="arirang" fill />
        </div>
      </Stack>
      <div css={st.title(imageWidth, aspectRatio)}>
        <Image src={title} alt="title" fill />
      </div>
      <Button css={st.button}>
        <Stack direction="row" alignItems={"center"} spacing="2.326vw">
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
    aspect-ratio: 430 / 672;

    background-image: url(/assets/images/main_bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 22.442vw;
    padding-left: 8.372vw;
    position: relative;
  `,
  kocis: css`
    position: relative;
    width: 21.395vw;
    aspect-ratio: 92 / 21;
  `,
  arirang: css`
    position: relative;
    width: 16.512vw;
    height: 4.186vw;
  `,
  people: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 85.349vw;
    aspect-ratio: 367 / 182;
    margin-left: 4.651vw;
  `,

  title: (imageWidth: string, aspectRatio: string) => css`
    position: relative;
    width: ${imageWidth};
    aspect-ratio: ${aspectRatio};
    margin: 9.674vw 0;
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
    width: 6.047vw;
    height: 6.279vw;
  `,
};
