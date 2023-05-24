import { useTranslation } from "react-i18next";
import arrow from "@/assets/icons/purple_arrow_down.png";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { Colors } from "@/common/theme";
import { css } from "@emotion/react";

const langs = [
  { lang: "한국어", value: "ko" },
  { lang: "English", value: "en" },
];

export const SelectBox = () => {
  const { i18n } = useTranslation("landing");
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const [selectedLang, setSelectedLang] = useState("한국어");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(true);
  };
  const handleClick = (lang: string, value: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
    handleLanguageChange(value);
  };
  return (
    <>
      <div css={st.selectBox}>
        <Stack
          onClick={toggleDropdown}
          direction="row"
          alignItems={"center"}
          spacing="1.042vw"
        >
          <Typography variant="body2" color={Colors.brand.primary}>
            {selectedLang}
          </Typography>
          <Image src={arrow} alt="arrow" width={12} height={6} />
        </Stack>
        {isOpen && (
          <ul css={st.lists}>
            {langs.map((it, index) => (
              <li key={index} onClick={() => handleClick(it.lang, it.value)}>
                {it.lang}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const st = {
  selectBox: css`
    position: relative;
    height: 1.771vw;
    width: 95.002px;
    cursor: pointer;
  `,
  lists: css`
    position: absolute;
    top: 1.771vw;
    left: 0;
    cursor: pointer;
  `,
};
