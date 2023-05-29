import { useRef } from "react";
import { Header } from "../../components/header";
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
  const mainRef = useRef<HTMLDivElement>(null);
  const OverviewRef = useRef<HTMLDivElement>(null);
  const PrizeRef = useRef<HTMLDivElement>(null);
  const RulesRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);
  console.log(mainRef);
  const handleScrollToTop = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection = (menu: string) => {
    const ref = GetSectionRef(menu);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const GetSectionRef = (menu: string): React.RefObject<HTMLDivElement> => {
    switch (menu) {
      case "Overview":
        return OverviewRef;
      case "Prize":
        return PrizeRef;
      case "Rules":
        return RulesRef;
      case "Contact Us":
        return ContactRef;
      default:
        return useRef<HTMLDivElement>(null);
    }
  };
  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <MainSection mainRef={mainRef} />
      <VideoSection />
      <ThemeSection OverviewRef={OverviewRef} />
      <ExampleSection />
      <RequirementsSection />
      <AwardsSection PrizeRef={PrizeRef} />
      <RulesSection RulesRef={RulesRef} />
      <EmailSection ContactRef={ContactRef} />
      <FooterSection handleScrollToTop={handleScrollToTop} />
    </>
  );
};
