type Box = Record<'l' | 'w' | 'h', number>

export function fitsInOneBox(boxes: Box[]): boolean {
  const isLowerThanPrevious = (box: Box, previousBox: Box | undefined) => {
    const { l, w, h } = box
    const { l: prevL = Infinity, w: prevW = Infinity, h: preveH = Infinity } = previousBox ?? {}
    return l < prevL && w < prevW && h < preveH
  }

  return boxes
    .map(({ w, l, h }) => ({ w, l, h })) //No es necesario, es para evitar la mutación del objeto original por el sort
    .sort((a, b) => b.l - a.l && b.w - a.w && b.h - a.h)
    .every((box, i, self) => isLowerThanPrevious(box, self[i - 1]))
}
