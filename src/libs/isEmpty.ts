type EmptyOptions = {
  ignoreWhitespace?: boolean,
};

const defaultEmptyOptions: EmptyOptions = {
  ignoreWhitespace: false,
};

export const isEmpty = (str: string, options?: EmptyOptions) => {
  options = {
    ...defaultEmptyOptions,
    ...options,
  };
  return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};
