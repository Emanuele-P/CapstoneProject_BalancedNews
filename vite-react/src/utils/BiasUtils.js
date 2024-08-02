import { extractDomain } from './urlUtils'

export const calculateBiasPercentages = (articles, sources) => {
  const left = []
  const center = []
  const right = []

  articles.forEach((article) => {
    const domain = extractDomain(article.url)
    const source = sources[domain]
    if (source) {
      switch (source.biasRating) {
        case 'Left':
        case 'Left-Center':
          left.push(article)
          break
        case 'Right':
        case 'Right-Center':
          right.push(article)
          break
        default:
          center.push(article)
      }
    }
  })

  const totalSources = left.length + center.length + right.length
  const leftPercentage = totalSources ? `${Math.round((left.length / totalSources) * 100)}%` : '0%'
  const centerPercentage = totalSources ? `${Math.round((center.length / totalSources) * 100)}%` : '0%'
  const rightPercentage = totalSources ? `${Math.round((right.length / totalSources) * 100)}%` : '0%'

  return { leftPercentage, centerPercentage, rightPercentage, left, center, right }
}

export const getMaxBias = (leftPercentage, centerPercentage, rightPercentage) => {
  const percentages = [
    { type: 'Left', value: parseFloat(leftPercentage) },
    { type: 'Center', value: parseFloat(centerPercentage) },
    { type: 'Right', value: parseFloat(rightPercentage) },
  ]

  percentages.sort((a, b) => b.value - a.value)

  return percentages[0]
}
