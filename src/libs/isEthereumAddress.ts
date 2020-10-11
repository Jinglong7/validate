const eth = /^(0x)[0-9a-f]{40}$/i;

export const isEthereumAddress = (str: string) => {
  return eth.test(str);
};
