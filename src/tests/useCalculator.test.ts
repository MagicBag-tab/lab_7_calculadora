import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useCalculator } from '../hooks/useCalculator'

const setup = () => renderHook(() => useCalculator())

const pressAll = (result: ReturnType<typeof setup>['result'], labels: string[]) => {
  labels.forEach(label => act(() => result.current.pressButton(label)))
}

describe('useCalculator', () => {
  it('concatena digitos y limita el display a 9 caracteres', () => {
    const { result } = setup()
    pressAll(result, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    expect(result.current.display).toBe('123456789')
  })

  it('resuelve operaciones encadenadas mostrando resultados intermedios', () => {
    const { result } = setup()
    pressAll(result, ['3', '+', '5', '*'])
    expect(result.current.display).toBe('8')
    pressAll(result, ['2', '='])
    expect(result.current.display).toBe('16')
  })

  it('muestra ERROR con resultados negativos', () => {
    const { result } = setup()
    pressAll(result, ['3', '-', '5', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR con resultados mayores a 999999999', () => {
    const { result } = setup()
    pressAll(result, ['9', '9', '9', '9', '9', '9', '9', '9', '9', '+', '1', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('multiplica numeros ingresados desde botones', () => {
    const { result } = setup()
    pressAll(result, ['1', '2', '*', '3', '='])
    expect(result.current.display).toBe('36')
  })

  it('trunca divisiones largas a 9 caracteres', () => {
    const { result } = setup()
    pressAll(result, ['2', '2', '/', '7', '='])
    expect(result.current.display).toBe('3.1428571')
  })

  it('soporta modulo', () => {
    const { result } = setup()
    pressAll(result, ['7', '%', '4', '='])
    expect(result.current.display).toBe('3')
  })

  it('cuenta el punto decimal dentro del limite de 9 caracteres', () => {
    const { result } = setup()
    pressAll(result, ['1', '2', '3', '4', '5', '6', '7', '8', '.', '9'])
    expect(result.current.display).toBe('12345678.')
  })

  it('cuenta el signo menos dentro del limite de 9 caracteres', () => {
    const { result } = setup()
    pressAll(result, ['1', '2', '3', '4', '5', '6', '7', '8', '+/-', '9'])
    expect(result.current.display).toBe('-12345678')
  })

  it('limpia el display al escribir despues de una operacion', () => {
    const { result } = setup()
    pressAll(result, ['1', '2', '+', '7'])
    expect(result.current.display).toBe('7')
  })
})
