// @ts-ignore allowing typedoc to build
import { isHexadecimal } from './isHexadecimal.ts';

export const isMongoId = (str: string) => {
  return isHexadecimal(str) && str.length === 24;
};
