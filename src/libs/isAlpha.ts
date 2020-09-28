// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';
// @ts-ignore allowing typedoc to build
import { alpha } from '../utils/alpha.ts';

export const isAlpha = (str: string, locale = 'en-US') => {
  assertString(str);
  if (locale in alpha) {
    return (alpha as any)[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
};

export const alphaLocales = Object.keys(alpha);
