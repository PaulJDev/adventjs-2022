import { describe, it } from 'node:test'
import assert from 'node:assert'
import { fitsInOneBox } from '../src/04_Una_caja_dentro_de_otra_caja_y_otra/index.js'

describe('04 - Una caja dentro de otra caja y otra...', () => {
  it('should return a boolean', () => {
    // Arrange
    const boxes = [1, 1, 1]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(typeof result, 'boolean')
  })

  it('should return false', () => {
    // Arrange
    const boxes = [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(result, false)
  })

  it('should return true', () => {
    // Arrange
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(result, true)
  })

  it('should return false', () => {
    // Arrange
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(result, false)
  })

  it('should return false', () => {
    // Arrange
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(result, false)
  })

  it('should return true', () => {
    // Arrange
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]

    // Act
    const result = fitsInOneBox(boxes)

    // Assert
    assert.strictEqual(result, true)
  })
})
