import { useState } from 'react'

type Operation = '+' | '-' | '*' | '/' | '%' | null

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

const isError = (value: number) => !Number.isFinite(value) || value < 0 || value > MAX_VALUE

const applyOperation = (prev: number, current: number, op: Operation) => {
  if (op === '+') return prev + current
  if (op === '-') return prev - current
  if (op === '*') return prev * current
  if (op === '/') return prev / current
  if (op === '%') return prev % current
  return current
}

const formatResult = (value: number) => {
  if (isError(value)) return 'ERROR'
  const result = value.toString()
  return result.length > MAX_DIGITS ? result.slice(0, MAX_DIGITS) : result
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState)

  const inputDigit = (digit: string) => {
    setState(prev => {
      const base = prev.shouldClearDisplay || prev.display === '0' ? '' : prev.display
      const next = digit === '.' && base === '' ? '0.' : base + digit
      if (digit === '.' && base.includes('.')) return prev
      if (next.length > MAX_DIGITS) return prev
      return { ...prev, display: next, shouldClearDisplay: false }
    })
  }

  const inputOperation = (op: Operation) => {
    setState(prev => {
      if (prev.display === 'ERROR') return prev
      const current = parseFloat(prev.display)
      if (prev.previousValue !== null && !prev.shouldClearDisplay) {
        const result = applyOperation(prev.previousValue, current, prev.operation)
        const display = formatResult(result)
        return {
          display,
          previousValue: display === 'ERROR' ? null : result,
          operation: op,
          shouldClearDisplay: true,
        }
      }
      return { ...prev, previousValue: current, operation: op, shouldClearDisplay: true }
    })
  }

  const calculate = () => {
    setState(prev => {
      if (prev.previousValue === null || prev.display === 'ERROR') return prev
      const result = applyOperation(prev.previousValue, parseFloat(prev.display), prev.operation)
      return { display: formatResult(result), previousValue: null, operation: null, shouldClearDisplay: true }
    })
  }

  const toggleSign = () => {
    setState(prev => {
      if (prev.display === 'ERROR' || prev.display === '0') return prev
      const display = prev.display.startsWith('-') ? prev.display.slice(1) : `-${prev.display}`
      return display.length > MAX_DIGITS ? prev : { ...prev, display }
    })
  }

  const clear = () => setState(initialState)

  const pressButton = (label: string) => {
    if ('0123456789.'.includes(label)) inputDigit(label)
    else if (label === 'C') clear()
    else if (label === '+/-') toggleSign()
    else if (label === '=') calculate()
    else if (label === '+' || label === '-' || label === '*' || label === '/' || label === '%') inputOperation(label)
  }

  return {
    display: state.display,
    inputDigit,
    inputOperation,
    calculate,
    toggleSign,
    clear,
    pressButton,
  }
}
