import Image from "next/dist/client/image";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import menu from "@/assets/icons/menu.svg";
import { Dialog, Typography } from "@mui/material";
import cross from "@/assets/icons/cross.svg";
import { Colors, useCustomMediaQuery } from "@/common/theme";
import Link from "next/link";
import { MobileSelectBox } from "../selectBox/MobileSelectBox";

const menus = ["Overview", "Awards", "Rules", "Contact Us"];

type HeaderType = {
  scrollToSection: (index: number) => void;
};

export const MobileHeader = ({ scrollToSection }: HeaderType) => {
  const { t, i18n } = useTranslation("main");
  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOpen = () => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const [selectedLang, setSelectedLang] = useState("한국어");
  return (
    <div css={[st.root, scrollPosition > 10 && st.scrollled_root]}>
      <Dialog onClose={handleClose} open={menuOpen} css={st.dialog_root}>
        <div css={st.dialog}>
          <div css={st.crossWrap} onClick={handleClose}>
            <div css={st.cross}>
              <Image src={cross} alt="cross" fill />
            </div>
          </div>

          <MobileSelectBox
            handleClose={handleClose}
            setSelectedLang={setSelectedLang}
            selectedLang={selectedLang}
          />

          <ul css={st.nav}>
            {menus.map((menu, index) => (
              <Link href={`#${menu}`} key={index} onClick={handleClose}>
                <li>
                  <Typography
                    fontSize={"7.442vw !important"}
                    color={Colors.brand.primary}
                  >
                    {menu}
                  </Typography>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Dialog>

      <div css={st.menu} onClick={handleClickOpen}>
        <Image src={menu} alt="menu" fill />
      </div>
    </div>
  );
};

const st = {
  root: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 7vw;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
  `,
  dialog_root: css`
    .MuiDialog-container {
      justify-content: flex-end;
    }
    .MuiPaper-root {
      margin: 0;
      max-width: 100%;
      width: 70%;
      max-height: none;
      height: 100vh;
      border-radius: 0;
    }
  `,
  scrollled_root: css`
    background-color: rgba(0, 0, 0, 0.45);
  `,
  dialog: css`
    width: 100%;
    height: 100%;
    background-image: url(/assets/images/main_bg.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 6.512vw 4.651vw 0 8.14vw;
  `,
  crossWrap: css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 14.186vw;
  `,
  cross: css`
    position: relative;
    width: 9.302vw;
    aspect-ratio: 1;
  `,
  nav: css`
    display: flex;
    flex-direction: column;
    gap: 12.791vw;
    margin-top: 14.186vw;
  `,
  menu: css`
    position: relative;
    width: 6.977vw;
    height: 4.651vw;
  `,
};
