import { useTranslation } from "react-i18next";
import purple_arrow from "@/assets/icons/purple_arrow_down.png";
import white_arrow from "@/assets/icons/white_arrow_down.png";

import { Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";
import { css } from "@emotion/react";
import Link from "next/link";

const langs = [
  { lang: "한국어", value: "ko" },
  { lang: "English", value: "en" },
  { lang: "中國語", value: "ch" },
  { lang: "tiếng Việt", value: "vi" },
  { lang: "แบบไทย", value: "th" },
  { lang: "Español", value: "sp" },
];

type MobileSelectBoxType = {
  setSelectedLang: (lang: string) => void;
  selectedLang: string;
  handleClose: () => void;
};
export const MobileSelectBox = ({
  setSelectedLang,
  selectedLang,
  handleClose,
}: MobileSelectBoxType) => {
  const { i18n } = useTranslation("landing");
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

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
            mr="2.326vw"
            fontSize={"7.442vw !important"}
            color={Colors.brand.primary}
          >
            {selectedLang}
          </Typography>
          <div css={st.arrow}>
            <Image src={purple_arrow} alt="arrow" fill />
          </div>
        </Stack>
        {isOpen && (
          <ul css={st.lists}>
            {langs.map((it, index) => (
              <Link href="/" key={index} onClick={handleClose}>
                <li
                  css={st.lang(it.lang == selectedLang)}
                  onClick={() => handleClick(it.lang, it.value)}
                >
                  {it.lang}
                </li>
              </Link>
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
    /* height: 1.771vw; */
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
  arrow: css`
    position: relative;
    aspect-ratio: 12 / 6;
    width: 4.186vw;
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
      top: 12vw;
      left: 0.7vw;
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
