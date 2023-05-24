import { useTranslation } from "react-i18next";

export default function Home() {
  const resourceName = "landing";
  const stringKey = "test";
  const { t, i18n } = useTranslation("landing");
  // 언어 변경 (전역)
  // const handleLanguageChange = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div>{t("test")}</div>
      <select onChange={handleLanguageChange}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </>
  );
}
