import PropTypes from 'prop-types'

function SentimentBar({ sentiment }) {
  const sentimentPercentage = sentiment * 100

  return (
    <div className="sentiment-bar-container">
      <div
        className="sentiment-bar"
        style={{ width: `${sentimentPercentage}%`, backgroundColor: getSentimentColor(sentiment) }}
      ></div>
      <span className="sentiment-percentage">{sentimentPercentage.toFixed(2)}%</span>
    </div>
  )
}

function getSentimentColor(sentiment) {
  if (sentiment > 0.75) return '#4caf50'
  if (sentiment > 0.5) return '#8bc34a'
  if (sentiment > 0.25) return '#ffc107'
  return '#f44336'
}

SentimentBar.propTypes = {
  sentiment: PropTypes.number.isRequired,
}

export default SentimentBar
