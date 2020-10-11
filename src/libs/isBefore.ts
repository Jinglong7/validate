// @ts-ignore allowing typedoc to build
import toDate from '../utils/toDate.ts';

export const isBefore = (str: string, date = String(new Date())) => {
  const comparison = toDate(date);
  const original = toDate(str);
  return !!(original && comparison && original < comparison);
};
