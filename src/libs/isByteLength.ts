type ByteLengthOptions = {
  min?: number;
  max?: number;
};

const defaultByteLengthOptions: ByteLengthOptions = {
  min: 0,
};

export const isByteLength = (str: string, options?: ByteLengthOptions) => {
  options = { ...defaultByteLengthOptions, ...options };
  let { min, max } = options;
  min = min || 0;
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
};
