const DECORATIONS = [
  'decor-star decor-star-top', 'decor-star decor-star-side', 'decor-moon',
  'decor-cloud decor-cloud-left', 'decor-cloud decor-cloud-right', 'decor-cloud decor-cloud-mini',
  'decor-heart decor-heart-top', 'decor-heart decor-heart-bottom',
  'decor-sparkle decor-sparkle-left', 'decor-sparkle decor-sparkle-right',
  'decor-planet', 'decor-bow', 'decor-dots decor-dots-left',
  'decor-dots decor-dots-right', 'decor-rainbow',
]

const Decorations = () => (
  <div className="decorations" aria-hidden="true">
    {DECORATIONS.map(className => <span key={className} className={className} />)}
  </div>
)

export default Decorations
