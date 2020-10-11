type LengthOptions = {
  min?: number;
  max?: number;
};

export const isLength = (str: string, options?: LengthOptions) => {
  const min = options?.min || 0;
  const max = options?.max;
  const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
};
