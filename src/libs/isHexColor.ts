const hexColor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

export const isHexColor = (str: string) => {
  return hexColor.test(str);
};
