import { Stack, Typography } from "@mui/material";
import kocis from "@/assets/logos/kocis.png";
import arirang from "@/assets/logos/arirang.png";
import Image from "next/dist/client/image";
import { css } from "@emotion/react";
import { Colors } from "@/common/theme";
import { useTranslation } from "react-i18next";
import { SelectBox } from "../selectBox/SelectBox";

const menus = ["Overveiew", "Prize", "Rules", "Contact Us"];

export const Header = () => {
  const { i18n } = useTranslation("landing");
  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <Stack direction="row" justifyContent={"space-between"}>
      <Stack direction="row" spacing={"10px"}>
        <div css={st.kocis}>
          <Image src={kocis} alt="kocis" fill />
        </div>
        <div css={st.arirang}>
          <Image src={arirang} alt="kocis" fill />
        </div>
      </Stack>
      <Stack direction="row" alignItems={"center"}>
        <ul css={st.nav}>
          {menus.map((menu, index) => (
            <li key={index}>
              <Typography variant="subtitle2" color={Colors.brand.primary}>
                {menu}
              </Typography>
            </li>
          ))}
        </ul>
        <div css={st.selectBox}>
          <SelectBox />
        </div>
      </Stack>
    </Stack>
  );
};

const st = {
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
  `,
  selectBox: css`
    margin-left: 4.167vw;
  `,
};
