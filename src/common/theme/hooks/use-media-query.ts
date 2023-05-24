import { useMediaQuery } from "@mui/material";

import { Mq } from "../options";

/**
 * @desc
 * 브라우저 화면 사이즈가 변하면 각 값을 boolean으로 리턴
 */
export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(Mq.xs);
  const isSmall = useMediaQuery(Mq.sm);
  const isMedium = useMediaQuery(Mq.md);
  const isLarge = useMediaQuery(Mq.lg);
  const isTablet = useMediaQuery(Mq.xl);
  const isLaptop = useMediaQuery(Mq.xxl);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
