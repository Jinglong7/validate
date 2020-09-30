// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const int = /^\d+$/;

export const isInt = (str: string) => {
  assertString(str);
  return int.test(str);
}
