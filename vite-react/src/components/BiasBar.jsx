import { propTypes } from 'react-bootstrap/esm/Image'

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
BiasBar.propTypes = {
  leftPercentage: propTypes.string,
  centerPercentage: propTypes.string,
  rightPercentage: propTypes.string,
}
export default BiasBar
