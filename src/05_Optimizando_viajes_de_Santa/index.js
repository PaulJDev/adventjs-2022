export function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return (() =>
    Math.max(
      ...giftsCities
        .reduce((a, c) => [...a, ...a.map((e) => [...e, ...[c]])], [[]])
        .filter((e) => e.length <= maxCities)
        .map((arr) => arr.reduce((a, c) => a + c, 0))
        .filter((n) => n <= maxGifts)
    ))()
}
