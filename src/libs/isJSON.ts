// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

export const isJSON = (str: string) => {
  assertString(str);
  try {
    JSON.parse(str);
  } catch(err) {
    return false;
  }
  return true;
}; 