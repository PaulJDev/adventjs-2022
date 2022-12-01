function wrapping(gifts) {
    const wrap = gift => {
      const WRAP_SYMBOL = '*'
      const SEPARATOR = '\n'
      
      const giftWrapped = WRAP_SYMBOL + gift + WRAP_SYMBOL
      const giftWrap = WRAP_SYMBOL.repeat(giftWrapped.length) 
      return [giftWrap, giftWrapped, giftWrap].join(SEPARATOR)
    }
  
    return gifts.map(wrap)
  }
  