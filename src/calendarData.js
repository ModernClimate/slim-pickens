// @flow

import range from './lib/range';

export function allDates(month: number, year: number) {
  const dates = range(1, 31)
    .map(day => new Date(`${month}/${day}/${year}`))
    .filter(date => date.getMonth() === month - 1);

  const offset = dates[0].getDay();

  const buckets = Array(offset).fill(null).concat(dates);

  return { dates, buckets, offset };
}
