export function checkPart(part) {
  const isPalindrome = (_, i, self) => {
    const str = self.filter((_, idx) => idx !== i)
    return str.join('') === str.reverse().join('')
  }
  return part.split('').some(isPalindrome)
}
