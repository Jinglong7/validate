// @ts-ignore allowing typedoc to build
import toFloat from '../utils/toFloat.ts';

export const isDivisibleBy = (str: string, num: string) => {
  return toFloat(str) % parseInt(num, 10) === 0;
};
