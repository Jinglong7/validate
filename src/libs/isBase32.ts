const base32 = /^[A-Z2-7]+=*$/;

export const isBase32 = (str: string) => {
  const len = str.length;
  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }
  return false;
};
