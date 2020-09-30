// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

export const isEmail = (str: string) => {
  assertString(str);
  return email.test(str.toUpperCase());
}