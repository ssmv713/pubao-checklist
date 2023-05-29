import { useTranslation } from "react-i18next";
import purple_arrow from "@/assets/icons/purple_arrow_down.png";
import white_arrow from "@/assets/icons/white_arrow_down.png";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { Colors } from "@/common/theme";
import { css } from "@emotion/react";

const langs = [
  { lang: "한국어", value: "ko" },
  { lang: "English", value: "en" },
  { lang: "中國語", value: "ch" },
  { lang: "tiếng Việt", value: "vi" },
  { lang: "แบบไทย", value: "th" },
  { lang: "Español", value: "sp" },
];

type SelectBoxType = {
  scrollPosition: number;
};

export const SelectBox = ({ scrollPosition }: SelectBoxType) => {
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
          <Image
            src={scrollPosition > 10 ? white_arrow : purple_arrow}
            alt="arrow"
            width={12}
            height={6}
          />
        </Stack>
        {isOpen && (
          <ul css={st.lists}>
            {langs.map((it, index) => (
              <li
                css={st.lang}
                key={index}
                onClick={() => handleClick(it.lang, it.value)}
              >
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
  lang: css`
    color: ${Colors.brand.primary};
    margin-top: 0.625vw;
  `,
};
