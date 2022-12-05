export function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  const REINDEERS_MULTIPLIER = 2
  const length = (arr: string[]): number => arr.join('').length

  return Math.floor((length(reindeers) * REINDEERS_MULTIPLIER) / length(packOfGifts))
}
