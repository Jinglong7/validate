export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

export const isFullWidth = (str: string) => {
  return fullWidth.test(str);
};
