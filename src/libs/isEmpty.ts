// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

type EmptyOptions = {
  ignoreWhitespace?: boolean,
};

const defaultEmptyOptions: EmptyOptions = {
  ignoreWhitespace: false,
};

export const isEmpty = (str: string, options?: EmptyOptions) => {
  assertString(str);
  options = {
    ...defaultEmptyOptions,
    ...options,
  };
  return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};
