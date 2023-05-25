import { css } from "@emotion/react";
import {
  AwardsSection,
  ExampleSection,
  MainSection,
  RequirementsSection,
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
      <RequirementsSection />
      <AwardsSection />
    </>
  );
};
