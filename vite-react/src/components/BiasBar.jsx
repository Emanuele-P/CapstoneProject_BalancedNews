function BiasBar({ leftPercentage, centerPercentage, rightPercentage }) {
  return (
    <div className="bias-bar-container">
      <div className="bias-bar left">
        <span className="percentage-text">{leftPercentage}</span>
      </div>
      <div className="bias-bar center">
        <span className="percentage-text">{centerPercentage}</span>
      </div>
      <div className="bias-bar right">
        <span className="percentage-text">{rightPercentage}</span>
      </div>
    </div>
  )
}

export default BiasBar
