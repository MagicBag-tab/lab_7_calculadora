import type { ButtonVariant } from '../calculator/buttons'

interface Props {
  label: string
  onClick: () => void
  variant?: ButtonVariant
}

const Button = ({ label, onClick, variant = 'number' }: Props) => (
  <button className={`btn btn-${variant}`} type="button" onClick={onClick} aria-label={label}>
    {label}
  </button>
)

export default Button
