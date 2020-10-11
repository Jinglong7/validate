const magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

export const isMagnetURI = (url: string) => {
  return magnetURI.test(url.trim());
};
