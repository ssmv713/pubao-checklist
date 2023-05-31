import { useTranslation } from "react-i18next";
import purple_arrow from "@/assets/icons/purple_arrow_down.png";
import white_arrow from "@/assets/icons/white_arrow_down.png";

import { Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Colors, Mq } from "@/common/theme";
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
    setIsOpen(!isOpen);
  };
  const handleClick = (lang: string, value: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
    handleLanguageChange(value);
  };
  const selectBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectBoxRef.current &&
        !selectBoxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <div css={st.selectBox} ref={selectBoxRef}>
        <Stack
          onClick={toggleDropdown}
          direction="row"
          alignItems={"center"}
          spacing="1.042vw"
        >
          <Typography
            variant="body2"
            color={
              scrollPosition > 10 ? Colors.common.white : Colors.brand.primary
            }
          >
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
                css={st.lang(it.lang == selectedLang)}
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
    width: 6.208vw;
    cursor: pointer;
    @media ${Mq.md} {
      width: fit-content;

      & p {
        font-size: 3.651vw;
      }
      margin-right: 15px;
    }
  `,
  lists: css`
    position: absolute;
    top: 2vw;
    left: -1.3vw;
    border-radius: 0.781vw;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    background: #fff;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    @media ${Mq.md} {
      top: 7vw;
    }
  `,
  lang: (isSelected: boolean) => css`
    color: ${Colors.text.variant1};
    padding: 0.8vw 1.2vw;
    @media ${Mq.md} {
      padding: 2vw 2.5vw;
    }
    &:hover {
      background: rgba(95, 0, 145, 0.09);
    }
    background: ${isSelected ? "rgba(95, 0, 145, 0.09)" : ""};
  `,
};
