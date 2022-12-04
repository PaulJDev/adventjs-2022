import { describe, it } from 'node:test'
import assert from 'node:assert'
import { distributeGifts } from '../src/03_Cuantas_cajas_de_regalos_puede_llevar_Papa_Noel/index.js'

describe('03 - ¿Cuántas cajas de regalos puede llevar Papá Noel?', () => {
  it('should return a number', () => {
    // Arrange
    const packOfGifts = ['a', 'b', 'c']
    const reindeers = ['d', 'e']

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(typeof result, 'number')
  })

  it('should return 2', () => {
    // Arrange
    const packOfGifts = ['a', 'b']
    const reindeers = ['c', 'd']

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(result, 2)
  })

  it('should return 1', () => {
    // Arrange
    const packOfGifts = ['a', 'b', 'c']
    const reindeers = ['d', 'e']

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(result, 1)
  })

  it("should return 0 if reindeers can't carry any pack", () => {
    // Arrange
    const packOfGifts = ['videogames', 'console']
    const reindeers = ['midu']

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(result, 0)
  })

  it('should return 5', () => {
    // Arrange
    const packOfGifts = ['game', 'videoconsole', 'computer']
    const reindeers = [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd',
    ]

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(result, 5)
  })

  it('should return 26', () => {
    // Arrange
    const packOfGifts = ['music']
    const reindeers = [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd',
    ]

    // Act
    const result = distributeGifts(packOfGifts, reindeers)

    // Assert
    assert.strictEqual(result, 26)
  })
})
