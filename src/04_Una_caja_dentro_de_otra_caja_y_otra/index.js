export function fitsInOneBox(boxes) {
  const isLowerThanPrevious = (box, previousBox = {}) => {
    const { l, w, h } = box
    const { l: prevL = Infinity, w: prevW = Infinity, h: preveH = Infinity } = previousBox
    return l < prevL && w < prevW && h < preveH
  }

  return boxes
    .map(({ w, l, h }) => ({ w, l, h }))
    .sort((a, b) => b.l - a.l)
    .every((box, i, self) => isLowerThanPrevious(box, self[i - 1]))
}
