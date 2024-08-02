/* eslint-disable react/prop-types */
function BiasBar({ leftPercentage, centerPercentage, rightPercentage }) {
  const minWidth = '10%'

  const getBiasStyle = (percentage, minWidth, color) => {
    return {
      width: percentage === '0%' ? minWidth : percentage,
      backgroundColor: color,
    }
  }

  const leftStyle = getBiasStyle(leftPercentage, minWidth)
  const centerStyle = getBiasStyle(centerPercentage, minWidth)
  const rightStyle = getBiasStyle(rightPercentage, minWidth)

  return (
    <div className="bias-bar-container">
      <div className="bias-bar left" style={leftStyle}>
        <span className="percentage-text">{leftPercentage}</span>
      </div>
      <div className="bias-bar center" style={centerStyle}>
        <span className="percentage-text">{centerPercentage}</span>
      </div>
      <div className="bias-bar right" style={rightStyle}>
        <span className="percentage-text">{rightPercentage}</span>
      </div>
    </div>
  )
}

export default BiasBar
