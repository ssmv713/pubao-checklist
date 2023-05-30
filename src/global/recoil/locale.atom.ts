import { atom } from "recoil";
import i18n from "../i18n";

export const localeState = atom<boolean>({
  key: "localeState",
  default: i18n.language === "ko" ? true : false,
});
