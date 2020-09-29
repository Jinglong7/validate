// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

type ByteLengthOptions = {
  min?: number;
  max?: number;
};

const defaultByteLengthOptions: ByteLengthOptions = {
  min: 0,
};

export const isByteLength = (str: string, options?: ByteLengthOptions) => {
  assertString(str);
  options = { ...defaultByteLengthOptions, ...options };
  let { min, max } = options;
  min = min || 0;
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
};
