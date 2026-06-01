import Display from './Display'
import ButtonGrid from './ButtonGrid'
import { useCalculator } from '../hooks/useCalculator'

const BUTTONS = [
  { label: 'C', variant: 'action' as const }, { label: '+/-', variant: 'action' as const },
  { label: '%', variant: 'operator' as const }, { label: '/', variant: 'operator' as const },
  { label: '7', variant: 'number' as const }, { label: '8', variant: 'number' as const },
  { label: '9', variant: 'number' as const }, { label: '*', variant: 'operator' as const },
  { label: '4', variant: 'number' as const }, { label: '5', variant: 'number' as const },
  { label: '6', variant: 'number' as const }, { label: '-', variant: 'operator' as const },
  { label: '1', variant: 'number' as const }, { label: '2', variant: 'number' as const },
  { label: '3', variant: 'number' as const }, { label: '+', variant: 'operator' as const },
  { label: '0', variant: 'number' as const }, { label: '.', variant: 'number' as const },
  { label: '=', variant: 'equals' as const },
]

const Calculator = () => {
  const { display, inputDigit, inputOperation, calculate, toggleSign, clear } = useCalculator()
  const handle = (label: string) => {
    if ('0123456789.'.includes(label)) inputDigit(label)
    else if (['+', '-', '*', '/', '%'].includes(label)) inputOperation(label as any)
    else if (label === '=') calculate()
    else if (label === '+/-') toggleSign()
    else if (label === 'C') clear()
  }
  return <div className="calculator"><Display value={display} /><ButtonGrid buttons={BUTTONS} onPress={handle} /></div>
}

export default Calculator