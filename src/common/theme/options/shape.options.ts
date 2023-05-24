import { Shape } from "@mui/system";

/**
 * @desc
 * 컴포넌트 둥글기 옵션
 */
export const CustomShape = {
  small: 4,
  medium: 8,
  large: 12,
};

export const muiShape: Partial<Shape> = {
  borderRadius: CustomShape.medium,
};
