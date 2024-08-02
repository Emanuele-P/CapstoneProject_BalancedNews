// eslint-disable-next-line react/prop-types
function FactualityBar({ bias }) {
  const biasScale = {
    Left: 8,
    'Left-Center': 30,
    'Least Biased': 50,
    'Right-Center': 70,
    Right: 92,
  }

  const biasColors = {
    Left: '#0b3954',
    'Left-Center': '#087e8b',
    'Least Biased': '#bfd7ea',
    'Right-Center': '#ff5a5f',
    Right: '#c81d25',
  }

  const biasPosition = biasScale[bias] || 50
  const biasColor = biasColors[bias] || '#bfd7ea'

  return (
    <div className="factuality-bar-container">
      <div className="factuality-bar" style={{ left: `${biasPosition}%`, backgroundColor: biasColor }}></div>
    </div>
  )
}

export default FactualityBar
