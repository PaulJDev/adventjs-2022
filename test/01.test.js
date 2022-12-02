import { describe, it } from 'node:test'
import assert from 'node:assert'
import { wrapping } from '../src/01_Automatizando_envolver_regalos_de_navidad/index.js'

describe('01 - Automatizando envolver regalos de navidad', () => {
  it('should return an array', () => {
    // Arrange
    const gifts = ['regalo 1', 'regalo 2', 'regalo 3']

    // Act
    const result = wrapping(gifts)

    // Assert
    assert.strictEqual(Array.isArray(result), true)
  })

  it('should return gifts wrapped', () => {
    // Arrange
    const gifts = ['book', 'game', 'socks']

    // Act
    const wrappedGifts = wrapping(gifts)

    // Assert
    const expected = [
      '******\n*book*\n******',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ]
    assert.deepStrictEqual(wrappedGifts, expected)
  })

  it('should return empty array when gifts is empty', () => {
    // Arrange
    const gifts = []

    // Act
    const wrappedGifts = wrapping(gifts)

    // Assert
    const expected = []
    assert.deepStrictEqual(wrappedGifts, expected)
  })

  it('should return midu wrapped', () => {
    // Arrange
    const gifts = ['midu']

    // Act
    const wrappedGifts = wrapping(gifts)

    // Assert
    const expected = ['******\n*midu*\n******']
    assert.deepStrictEqual(wrappedGifts, expected)
  })

  it('should return "a" wrapped', () => {
    // Arrange
    const gifts = ['a']

    // Act
    const wrappedGifts = wrapping(gifts)

    // Assert
    const expected = ['***\n*a*\n***']

    assert.deepStrictEqual(wrappedGifts, expected)
  })

  it('wrapping an empty array should return an empty array', () => {
    // Arrange
    const gifts = []

    // Act
    const wrappedGifts = wrapping(gifts)

    // Assert
    const expected = []
    assert.deepStrictEqual(wrappedGifts, expected)
  })
})
