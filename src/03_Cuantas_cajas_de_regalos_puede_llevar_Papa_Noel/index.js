export function distributeGifts(packOfGifts, reindeers) {
  const REINDEERS_MULTIPLIER = 2
  const length = (arr) => arr.join('').length

  return Math.floor((length(reindeers) * REINDEERS_MULTIPLIER) / length(packOfGifts))
}
