// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';
// @ts-ignore allowing typedoc to build
import toFloat from '../utils/toFloat.ts';

export const isDivisibleBy = (str: string, num: string) => {
  assertString(str);
  assertString(num);
  return toFloat(str) % parseInt(num, 10) === 0;
};
