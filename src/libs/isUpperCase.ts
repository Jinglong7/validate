// @ts-ignore allowing typedoc to build
import assertString from "../utils/assertString.ts";

export const isUpperCase = (str: string) => {
  assertString(str);
  return str === str.toUpperCase();
};
