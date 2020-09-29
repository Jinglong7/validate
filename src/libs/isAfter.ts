// @ts-ignore allowing typedoc to build
import assertString from "../utils/assertString.ts";
// @ts-ignore allowing typedoc to build
import toDate from "../utils/toDate.ts";

export const isAfter = (str: string, date = String(new Date())) => {
  assertString(str);
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original > comparison);
};
