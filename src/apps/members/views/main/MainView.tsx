import { css } from "@emotion/react";
import {
  ExampleSection,
  MainSection,
  ThemeSection,
  VideoSection,
} from "./sections";

export const MainView = () => {
  return (
    <>
      <MainSection />
      <VideoSection />
      <ThemeSection />
      <ExampleSection />
    </>
  );
};
