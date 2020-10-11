const ascii = /^[\x00-\x7F]+$/;

export const isAscii = (str: string) => {
  return ascii.test(str);
};
