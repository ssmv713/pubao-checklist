import { css } from "@emotion/react";

export const VideoSection = () => {
  return (
    <div css={st.root}>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        css={st.video}
        allowFullScreen
        src="https://www.youtube.com/embed/sBxdjZtFwpQ?autoplay=1&mute=1"
      ></iframe>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    margin-bottom: -3px;
  `,
  video: css`
    width: 100%;
    aspect-ratio: 1920 / 1080;
  `,
};
