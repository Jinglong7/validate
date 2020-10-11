// @ts-ignore allowing typedoc to build

export default function toDate(str: string) {
  const date = Date.parse(str);
  return !isNaN(date) ? new Date(date) : null;
};
