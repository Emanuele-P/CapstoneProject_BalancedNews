// eslint-disable-next-line react/prop-types
function FactualityBar({ bias }) {
  const biasScale = {
    'Extreme Left': 5,
    Left: 15,
    'Left-Center': 30,
    'Least Biased': 50,
    'Right-Center': 70,
    Right: 85,
    'Extreme Right': 95,
  }

  const biasPosition = biasScale[bias] || 50

  return (
    <div className="factuality-bar-container">
      <div className="factuality-bar" style={{ left: `${biasPosition}%` }}></div>
    </div>
  )
}

export default FactualityBar
