// @flow

export default function range(low: number, high: number) {
  return Array(high - low + 1).fill().map((_, i) => i + low);
}
