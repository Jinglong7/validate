const multibyte = /[^\x00-\x7F]/;

export const isMultibyte = (str: string) => {
  return multibyte.test(str);
};
