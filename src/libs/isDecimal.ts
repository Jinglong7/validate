// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';
// @ts-ignore allowing typedoc to build
import { decimal } from '../utils/alpha.ts';
// @ts-ignore allowing typedoc to build
import includes from '../utils/includes.ts';

type DecimalOptions = {
  forceDecimal?: boolean;
  decimalDigits?: string;
  locale?: string;
};

const decimalRegExp = (options: Required<DecimalOptions>) => {
  const regExp = new RegExp(
    `^[-+]?([0-9]+)?(\\${(decimal as any)[options.locale]}[0-9]{${
      options.decimalDigits
    }})${options.forceDecimal ? '' : '?'}$`
  );
  return regExp;
};

const defaultDecimalOptions = {
  forceDecimal: false,
  decimalDigits: '1,',
  locale: 'en-US',
};

const blacklist = ['', '-', '+'];

export const isDecimal = (str: string, options?: DecimalOptions) => {
  assertString(str);
  options = {
    ...defaultDecimalOptions,
    ...options,
  };
  if ((options as Required<DecimalOptions>).locale in decimal) {
    return (
      !includes(blacklist, str.replace(/ /g, '')) &&
      decimalRegExp(options as Required<DecimalOptions>).test(str)
    );
  }
  throw new Error(`Invalid locale '${options.locale}'`);
};
