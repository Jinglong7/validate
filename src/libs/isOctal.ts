const octal = /^(0o)?[0-7]+$/i;

export const isOctal = (str: string) => {
  return octal.test(str);
};
