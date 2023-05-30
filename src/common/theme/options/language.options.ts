import i18n from "@/global/i18n";

export const isEnglish = (): boolean => {
  return i18n.language === "en";
};

export const isKorean = (): boolean => {
  return i18n.language === "ko";
};

export const isChinese = (): boolean => {
  return i18n.language === "ch";
};
export const isVietnamese = (): boolean => {
  return i18n.language === "vi";
};

export const isThai = (): boolean => {
  return i18n.language === "th";
};

export const isSpanish = (): boolean => {
  return i18n.language === "sp";
};
