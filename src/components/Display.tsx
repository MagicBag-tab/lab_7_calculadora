interface Props {
  value: string
}

const Display = ({ value }: Props) => (
  <div className="display">
    <span className={value === 'ERROR' ? 'error' : ''}>{value}</span>
  </div>
)

export default Display