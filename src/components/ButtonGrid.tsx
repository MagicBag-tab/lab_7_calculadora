import Button from './Button'

type ButtonDef = { label: string; variant: 'number' | 'operator' | 'action' | 'equals' }

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