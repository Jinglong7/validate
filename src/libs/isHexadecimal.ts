const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

export const isHexadecimal = (str: string) => {
  return hexadecimal.test(str);
};
