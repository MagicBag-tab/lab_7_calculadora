import Display from './Display'
import ButtonGrid from './ButtonGrid'
import { useCalculator } from '../hooks/useCalculator'

const BUTTONS = [
  { label: 'AC', variant: 'action' as const }, { label: 'MR', variant: 'action' as const },
  { label: 'M-', variant: 'action' as const }, { label: 'M+', variant: 'action' as const },
  { label: '%', variant: 'action' as const }, { label: '÷', variant: 'operator' as const },
  { label: '×', variant: 'operator' as const }, { label: '-', variant: 'operator' as const },
  { label: '7', variant: 'number' as const }, { label: '8', variant: 'number' as const },
  { label: '9', variant: 'number' as const }, { label: '+', variant: 'operator' as const },
  { label: '4', variant: 'number' as const }, { label: '5', variant: 'number' as const },
  { label: '6', variant: 'number' as const }, { label: '=', variant: 'equals' as const },
  { label: '1', variant: 'number' as const }, { label: '2', variant: 'number' as const },
  { label: '3', variant: 'number' as const },
  { label: '0', variant: 'number' as const }, { label: '00', variant: 'number' as const },
  { label: '.', variant: 'number' as const },
]

const OPERATORS = {
  '+': '+',
  '-': '-',
  '×': '*',
  '÷': '/',
} as const

const Calculator = () => {
  const {
    display,
    inputDigit,
    inputOperation,
    calculate,
    clear,
    applyPercent,
    addMemory,
    subtractMemory,
    recallMemory,
  } = useCalculator()

  const handle = (label: string) => {
    if ('0123456789.'.includes(label)) inputDigit(label)
    else if (label === '00') {
      inputDigit('0')
      inputDigit('0')
    }
    else if (label in OPERATORS) inputOperation(OPERATORS[label as keyof typeof OPERATORS])
    else if (label === '=') calculate()
    else if (label === '%') applyPercent()
    else if (label === 'AC') clear()
    else if (label === 'M+') addMemory()
    else if (label === 'M-') subtractMemory()
    else if (label === 'MR') recallMemory()
  }

  return (
    <div className="calculator">
      <div className="decorations" aria-hidden="true">
        <span className="decor-star decor-star-top" />
        <span className="decor-star decor-star-side" />
        <span className="decor-moon" />
        <span className="decor-cloud decor-cloud-left" />
        <span className="decor-cloud decor-cloud-right" />
        <span className="decor-cloud decor-cloud-mini" />
        <span className="decor-heart decor-heart-top" />
        <span className="decor-heart decor-heart-bottom" />
        <span className="decor-sparkle decor-sparkle-left" />
        <span className="decor-sparkle decor-sparkle-right" />
        <span className="decor-planet" />
        <span className="decor-bow" />
        <span className="decor-dots decor-dots-left" />
        <span className="decor-dots decor-dots-right" />
        <span className="decor-rainbow" />
      </div>
      <Display value={display} />
      <ButtonGrid buttons={BUTTONS} onPress={handle} />
    </div>
  )
}

export default Calculator
