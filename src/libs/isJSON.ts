type JSONOptions = {
  allowPrimitives?: boolean;
};

const defaultJSONOptions = {
  allowPrimitives: false,
};

export const isJSON = (str: string, options?: JSONOptions) => {
  try {
    options = {
      ...defaultJSONOptions,
      ...options
    };
    let primitives: Array<boolean | null> = [];
    if (options.allowPrimitives) {
      primitives = [null, false, true];
    }

    const obj = JSON.parse(str);
    return primitives.includes(obj) || (!!obj && typeof obj === 'object');
  } catch (e) { /* ignore */ }
  return false;
};
