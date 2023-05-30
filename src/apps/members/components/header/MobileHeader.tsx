import Image from "next/dist/client/image";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import menu from "@/assets/icons/menu.svg";
import { SelectBox } from "../selectBox/SelectBox";
import { Dialog, Typography } from "@mui/material";
import cross from "@/assets/icons/cross.svg";
import { Colors } from "@/common/theme";
import Link from "next/link";

const menus = ["Overview", "Prize", "Rules", "Contact Us"];

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
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div css={[st.root, scrollPosition > 10 && st.scrollled_root]}>
      <Dialog onClose={handleClose} open={open} fullScreen>
        <div css={st.dialog}>
          <div css={st.crossWrap} onClick={handleClose}>
            <div css={st.cross}>
              <Image src={cross} alt="cross" fill />
            </div>
          </div>
          <ul css={st.nav}>
            {menus.map((menu, index) => (
              <Link href={`#${menu}`} key={index} onClick={handleClose}>
                <li>
                  <Typography fontSize={"7.442vw"} color={Colors.brand.primary}>
                    {menu}
                  </Typography>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Dialog>
      <SelectBox scrollPosition={scrollPosition} />
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
