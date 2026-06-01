import { useState } from 'react'

type Operation = '+' | '-' | '*' | '/' | null

interface CalculatorState {
  display: string
  previousValue: number | null
  operation: Operation
  shouldClearDisplay: boolean
}

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  shouldClearDisplay: false,
}

const isError = (value: number) => !Number.isFinite(value) || Math.abs(value) > MAX_VALUE

const applyOperation = (prev: number, current: number, op: Operation): number => {
  if (op === '+') return prev + current
  if (op === '-') return prev - current
  if (op === '*') return prev * current
  if (op === '/') return prev / current
  return current
}

const formatResult = (value: number): string => {
  if (isError(value)) return 'ERROR'
  const str = value.toString()
  if (str.length <= MAX_DIGITS) return str
  const fixed = parseFloat(value.toFixed(MAX_DIGITS - str.split('.')[0].length))
  return fixed.toString().slice(0, MAX_DIGITS)
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState)
  const [memory, setMemory] = useState(0)

  const inputDigit = (digit: string) => {
    setState(prev => {
      const base = prev.shouldClearDisplay ? '' : prev.display === '0' ? '' : prev.display
      if (digit === '.' && base.includes('.')) return prev
      if (base.replace('-', '').replace('.', '').length >= MAX_DIGITS) return prev
      return { ...prev, display: base + digit, shouldClearDisplay: false }
    })
  }

  const inputOperation = (op: Operation) => {
    setState(prev => {
      if (prev.display === 'ERROR') return prev
      const current = parseFloat(prev.display)
      if (prev.previousValue !== null && !prev.shouldClearDisplay) {
        const result = applyOperation(prev.previousValue, current, prev.operation)
        const display = formatResult(result)
        return { display, previousValue: display === 'ERROR' ? null : result, operation: op, shouldClearDisplay: true }
      }
      return { ...prev, previousValue: current, operation: op, shouldClearDisplay: true }
    })
  }

  const calculate = () => {
    setState(prev => {
      if (prev.previousValue === null || prev.display === 'ERROR') return prev
      const current = parseFloat(prev.display)
      const result = applyOperation(prev.previousValue, current, prev.operation)
      const display = formatResult(result)
      return { display, previousValue: null, operation: null, shouldClearDisplay: true }
    })
  }

  const toggleSign = () => {
    setState(prev => {
      if (prev.display === 'ERROR' || prev.display === '0') return prev
      const toggled = prev.display.startsWith('-') ? prev.display.slice(1) : '-' + prev.display
      if (toggled.length > MAX_DIGITS) return prev
      return { ...prev, display: toggled }
    })
  }

  const applyPercent = () => {
    setState(prev => {
      if (prev.display === 'ERROR') return prev
      const result = parseFloat(prev.display) / 100
      return { ...prev, display: formatResult(result), shouldClearDisplay: true }
    })
  }

  const addMemory = () => {
    if (state.display !== 'ERROR') setMemory(prev => prev + parseFloat(state.display))
  }

  const subtractMemory = () => {
    if (state.display !== 'ERROR') setMemory(prev => prev - parseFloat(state.display))
  }

  const recallMemory = () => {
    setState(prev => ({ ...prev, display: formatResult(memory), shouldClearDisplay: true }))
  }

  const clear = () => setState(initialState)

  return {
    display: state.display,
    inputDigit,
    inputOperation,
    calculate,
    toggleSign,
    clear,
    applyPercent,
    addMemory,
    subtractMemory,
    recallMemory,
  }
}
