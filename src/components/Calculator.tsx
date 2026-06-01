import { BUTTONS } from '../calculator/buttons'
import { useCalculator } from '../hooks/useCalculator'
import ButtonGrid from './ButtonGrid'
import Decorations from './Decorations'
import Display from './Display'

const Calculator = () => {
  const { display, pressButton } = useCalculator()

  return (
    <div className="calculator">
      <Decorations />
      <Display value={display} />
      <ButtonGrid buttons={BUTTONS} onPress={pressButton} />
    </div>
  )
}

export default Calculator
