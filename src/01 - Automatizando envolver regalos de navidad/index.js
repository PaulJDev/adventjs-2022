function wrapping(gifts) {
    const WRAP_SYMBOL = '*'
    return gifts.map(gift => {
      const giftWrapped = WRAP_SYMBOL + gift + WRAP_SYMBOL
      const wrap = WRAP_SYMBOL.repeat(giftWrapped.length) 
      return `${wrap}\n${giftWrapped}\n${wrap}`
    })
 }
  