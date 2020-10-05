// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const htmlCommentRegex = /<!--([\s\S]*?)-->/g;
const entityRegex = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/gim;
const svgRegex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i;

/**
 * @example
 * ```ts
 * import { validate } from 'https://deno.land/x/validate/mod.ts';
 *
 * validate.isSvg(''); // true
 * validate.isSvg('this string ends with an svg <svg></svg>'); // false
 * ```
 */
export const isSvg = (str: string) => {
  assertString(str);
  return svgRegex.test(
    str.replace(entityRegex, '').replace(htmlCommentRegex, '')
  );
};
