import {
  AwardsSection,
  EmailSection,
  ExampleSection,
  FooterSection,
  MainSection,
  RequirementsSection,
  RulesSection,
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
      <RulesSection />
      <EmailSection />
      <FooterSection />
    </>
  );
};
