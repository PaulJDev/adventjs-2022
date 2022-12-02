import { describe, it } from 'node:test'
import assert from 'node:assert'
import { countHours } from '../src/02_Nadie_quiere_hacer_horas_extra/index.js'

describe('02 - Nadie quiere hacer horas extra', () => {
  it('should return an number', () => {
    // Arrange
    const year = 2021
    const holidays = ['01-01', '01-06', '04-02', '05-01', '06-03', '07-05', '08-15', '10-12', '11-01', '12-08', '12-25']

    // Act
    const result = countHours(year, holidays)

    // Assert
    assert.strictEqual(typeof result, 'number')
  })

  it('shoudl return four extra hours', () => {
    // Arrange
    const year = 2023
    const holidays = ['01/06', '04/01', '12/25']

    // Act
    const result = countHours(year, holidays)

    // Assert
    assert.strictEqual(result, 4)
  })

  it('shoudl return four extra hours', () => {
    // Arrange
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25']

    // Act
    const result = countHours(year, holidays)

    // Assert
    assert.strictEqual(result, 4)
  })

  it('shoudl return ten extra hours', () => {
    // Arrange
    const year = 1985
    const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

    // Act
    const result = countHours(year, holidays)

    // Assert
    assert.strictEqual(result, 10)
  })

  it('should return zero extra hours', () => {
    // Arrange
    const year = 2000
    const holidays = ['01/01']

    // Act
    const result = countHours(year, holidays)

    // Assert
    assert.strictEqual(result, 0)
  })
})
