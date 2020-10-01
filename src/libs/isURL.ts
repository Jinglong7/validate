// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

export const isURL = (str: string) => {
  assertString(str);
  try {
    new URL(str);
  } catch(err) {
    return false;
  }
  return true;
};
