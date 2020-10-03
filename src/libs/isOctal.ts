// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const octal = /^(0o)?[0-7]+$/i;

export const isOctal = (str: string) => {
  assertString(str);
  return octal.test(str);
};
