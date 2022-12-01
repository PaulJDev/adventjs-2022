export function wrapping(gifts) {
  const wrap = (gift) => {
    const WRAP_SYMBOL = '*'
    const SEPARATOR = '\n'

    const giftWrapped = WRAP_SYMBOL + gift + WRAP_SYMBOL
    const wrapper = WRAP_SYMBOL.repeat(giftWrapped.length)
    return [wrapper, giftWrapped, wrapper].join(SEPARATOR)
  }

  return gifts.map(wrap)
}
