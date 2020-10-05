// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export const isSurrogatePair = (str: string) => {
  assertString(str);
  return surrogatePair.test(str);
};
