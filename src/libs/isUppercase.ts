// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

export const isUppercase = (str: string) => {
  assertString(str);
  return str === str.toUpperCase();
};
