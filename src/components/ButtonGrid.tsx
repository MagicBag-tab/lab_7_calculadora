import Button from './Button'

export type ButtonVariant = 'number' | 'operator' | 'action' | 'equals'

type ButtonDef = { label: string; variant: ButtonVariant }

interface Props {
  buttons: ButtonDef[]
  onPress: (label: string) => void
}

const ButtonGrid = ({ buttons, onPress }: Props) => (
  <div className="grid">
    {buttons.map(b => <Button key={b.label} label={b.label} variant={b.variant} onClick={() => onPress(b.label)} />)}
  </div>
)

export default ButtonGrid
