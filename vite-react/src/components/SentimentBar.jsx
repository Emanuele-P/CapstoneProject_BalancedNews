/* eslint-disable react/prop-types */

function SentimentBar({ sentiment }) {
  const sentimentPercentage = (((sentiment + 1) / 2) * 100).toFixed(2)

  const sentimentColors = {
    veryPositive: '#1B998B',
    positive: '#D6E681',
    neutral: '#F2A840',
    negative: '#EA4859',
    veryNegative: '#5F0711',
  }

  const sentimentColor = (() => {
    switch (true) {
      case sentiment > 0.75:
        return sentimentColors.veryPositive
      case sentiment > 0.4:
        return sentimentColors.positive
      case sentiment >= 0:
        return sentimentColors.neutral
      case sentiment > -0.5:
        return sentimentColors.negative
      default:
        return sentimentColors.veryNegative
    }
  })()

  const transparentSentimentColor = `${sentimentColor}40`

  return (
    <div
      className="sentiment-bar-container"
      style={{
        backgroundColor: transparentSentimentColor,
      }}
    >
      <div
        className="sentiment-bar"
        style={{
          width: `${sentimentPercentage}%`,
          backgroundColor: sentimentColor,
          '--sentiment-percentage': `${sentimentPercentage}%`,
        }}
      ></div>
      <span className="sentiment-percentage">{sentimentPercentage}%</span>
    </div>
  )
}

export default SentimentBar
