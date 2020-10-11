
// @ts-ignore allowing typedoc to build
import { alphanumeric } from '../utils/alpha.ts';

export const isAlphanumeric = (str: string, locale = 'en-US') => {
  if (locale in alphanumeric) {
    return (alphanumeric as any)[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
};

export const alphanumericLocales = Object.keys(alphanumeric);
