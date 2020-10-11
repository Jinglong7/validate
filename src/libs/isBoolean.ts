export const isBoolean = (str: string) => {
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
};
