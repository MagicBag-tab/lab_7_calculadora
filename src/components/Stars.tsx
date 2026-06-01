const STARS = [
  { id: 1, x: 8, y: 12, size: 0.8, color: '#ffffff', opacity: 0.45 },
  { id: 2, x: 17, y: 78, size: 0.55, color: '#FFD6E7', opacity: 0.46 },
  { id: 3, x: 25, y: 24, size: 0.48, color: '#D7F1FF', opacity: 0.5 },
  { id: 4, x: 36, y: 89, size: 0.72, color: '#ffffff', opacity: 0.42 },
  { id: 5, x: 47, y: 11, size: 0.52, color: '#D7F1FF', opacity: 0.48 },
  { id: 6, x: 58, y: 69, size: 0.68, color: '#FFD6E7', opacity: 0.38 },
  { id: 7, x: 72, y: 30, size: 0.46, color: '#ffffff', opacity: 0.42 },
  { id: 8, x: 88, y: 84, size: 0.8, color: '#D7F1FF', opacity: 0.43 },
  { id: 9, x: 6, y: 93, size: 0.42, color: '#ffffff', opacity: 0.38 },
  { id: 10, x: 95, y: 9, size: 0.58, color: '#FFF1B8', opacity: 0.44 },
  { id: 11, x: 14, y: 39, size: 0.5, color: '#D7F1FF', opacity: 0.4 },
  { id: 12, x: 82, y: 58, size: 0.55, color: '#FFD6E7', opacity: 0.4 },
  { id: 13, x: 31, y: 58, size: 0.45, color: '#ffffff', opacity: 0.34 },
  { id: 14, x: 66, y: 15, size: 0.68, color: '#ffffff', opacity: 0.42 },
  { id: 15, x: 92, y: 41, size: 0.48, color: '#D7F1FF', opacity: 0.42 },
]

const starPoints = (x: number, y: number, outer: number) => {
  const inner = outer * 0.44

  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = -Math.PI / 2 + (i * Math.PI) / 5
    const pointX = x + Math.cos(angle) * radius
    const pointY = y + Math.sin(angle) * radius

    return `${pointX.toFixed(2)},${pointY.toFixed(2)}`
  }).join(' ')
}

const Stars = () => (
  <svg className="stars-bg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    {STARS.map((star) => (
      <polygon
        key={star.id}
        points={starPoints(star.x, star.y, star.size)}
        fill={star.color}
        opacity={star.opacity}
      />
    ))}
  </svg>
)

export default Stars
