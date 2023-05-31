import { Stack, Typography } from "@mui/material";
import kocis from "@/assets/logos/kocis.png";
import arirang from "@/assets/logos/arirang.png";
import Image from "next/dist/client/image";
import { css } from "@emotion/react";
import { Colors } from "@/common/theme";
import { useTranslation } from "react-i18next";
import { SelectBox } from "../selectBox/SelectBox";
import { useEffect, useState } from "react";

const menus = ["Overview", "Awards", "Rules", "Contact Us"];

type HeaderType = {
  scrollToSection: (index: number) => void;
};

export const Header = ({ scrollToSection }: HeaderType) => {
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
  const kocis_black: string = t("kocis_black", { returnObjects: true });
  const kocis_white: string = t("kocis_white", { returnObjects: true });
  return (
    <div css={[st.root, scrollPosition > 10 && st.scrollled_root]}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction="row" spacing={"10px"}>
          <div css={st.kocis}>
            <Image
              src={scrollPosition > 10 ? kocis_white : kocis_black}
              alt="kocis"
              fill
            />
          </div>
          <div css={st.arirang}>
            <Image src={arirang} alt="kocis" fill />
          </div>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <ul css={st.nav}>
            {menus.map((menu, index) => (
              <li key={index} onClick={() => scrollToSection(index)}>
                <Typography variant="subtitle2" color={Colors.brand.primary}>
                  {menu}
                </Typography>
              </li>
            ))}
          </ul>
          <div css={st.selectBox}>
            <SelectBox scrollPosition={scrollPosition} />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5vw 8.333vw;
    z-index: 10;
  `,
  scrollled_root: css`
    background-color: rgba(0, 0, 0, 0.45);
    & h6,
    p {
      color: #fff;
    }
  `,
  kocis: css`
    position: relative;
    width: 8.854vw;
    height: 2.083vw;
  `,
  arirang: css`
    position: relative;
    width: 7.813vw;
    height: 2.083vw;
  `,
  nav: css`
    display: flex;
    gap: 4.167vw;
    & li {
      cursor: pointer;
    }
  `,
  selectBox: css`
    margin-left: 4.167vw;
  `,
};
