// @ts-ignore allowing typedoc to build
import assertString from "../utils/assertString.ts";

// supports 6 digit and 3 digit hex colors
const hex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

export const isHexColor = (str: string) => {
  assertString(str);
  return hex.test(str);
};
