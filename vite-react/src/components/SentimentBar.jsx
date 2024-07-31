import PropTypes from 'prop-types'

function SentimentBar({ sentiment }) {
  const sentimentPercentage = (((sentiment + 1) / 2) * 100).toFixed(2)

  return (
    <div className="sentiment-bar-container">
      <div
        className="sentiment-bar"
        style={{
          width: `${sentimentPercentage}%`,
          backgroundColor: getSentimentColor(sentiment),
          '--sentiment-percentage': `${sentimentPercentage}%`,
        }}
      ></div>
      <span className="sentiment-percentage">{sentimentPercentage}%</span>
    </div>
  )
}

function getSentimentColor(sentiment) {
  if (sentiment > 0.75) return '#1B998B'
  if (sentiment > 0.4) return '#D6E681'
  if (sentiment >= 0) return '#F2A840'
  if (sentiment > -0.5) return '#EA4859'
  return '#5F0711'
}

SentimentBar.propTypes = {
  sentiment: PropTypes.number.isRequired,
}

export default SentimentBar
