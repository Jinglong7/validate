// @ts-ignore allowing typedoc to build
import { isFloat } from '../libs/isFloat.ts';

export const toFloat = (str: string) => {
  if (!isFloat(str)) return NaN;
  return parseFloat(str);
};

export default toFloat;
