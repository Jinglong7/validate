// supports Bech32 addresses
const btc = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

export const isBtcAddress = (str: string) => {
  return btc.test(str);
};
