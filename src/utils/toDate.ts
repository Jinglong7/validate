// @ts-ignore allowing typedoc to build
import assertString from './assertString.ts';

export default function toDate(str: string) {
  assertString(str);
  const date = Date.parse(str);
  return !isNaN(date) ? new Date(date) : null;
};
