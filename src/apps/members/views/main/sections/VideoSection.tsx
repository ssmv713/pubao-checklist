import { Mq } from "@/common/theme";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";

export const VideoSection = () => {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === "ko";
  return (
    <div css={st.root}>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        css={st.video}
        allowFullScreen
        src={
          isKorean
            ? "https://www.youtube.com/embed/dCrfzFRXses?playlist=dCrfzFRXses&loop=1&autoplay=1&mute=1"
            : "https://www.youtube.com/embed/CQdQ04rD8kk?playlist=dCrfzFRXses&loop=1&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    margin-bottom: -0.26vw;
    @media ${Mq.md} {
      margin-bottom: -1.465vw;
    }
  `,
  video: css`
    width: 100%;
    aspect-ratio: 1920 / 1080;
  `,
};
