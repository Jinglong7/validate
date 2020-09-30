// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

type FloatOptions = {
  decimalSeperator?: '.' | ',';
};

const defaultFloatOptions: FloatOptions = {
  decimalSeperator: '.',
};

export const isFloat = (str: string, options?: FloatOptions) => {
  assertString(str);
  options = { ...defaultFloatOptions, ...options };
  let float: RegExp;
  switch(options.decimalSeperator) {
    case '.':
      float = /^\d+\.\d+$/;
      break;
    case ',':
      float = /^\d+,\d+$/;
      break;
    default:
      return false; 
  }
  return float.test(str);
}