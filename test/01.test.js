import test from 'node:test'
import assert from 'node:assert'
import { wrapping } from '../src/01_Automatizando_envolver_regalos_de_navidad/index.js'

test('01 - Automatizando envolver regalos de navidad', () => {
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
