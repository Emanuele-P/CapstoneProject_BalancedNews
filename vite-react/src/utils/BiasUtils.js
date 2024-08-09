import { extractDomain } from './urlUtils'

export const calculateBiasPercentages = (articles, sources) => {
  const left = []
  const center = []
  const right = []

  articles.forEach((article) => {
    const domain = extractDomain(article.url)
    // console.log(`Processing article with domain: ${domain}`)

    if (domain && sources[domain]) {
      const source = sources[domain]
      // console.log(`Matched domain with bias: ${source.biasRating}`)

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
    } else {
      // console.warn(`Domain not found or not valid: ${domain}`)
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

export const findHighestBiasArticles = (allValidNews, sources) => {
  let highestLeft = null
  let highestCenter = null
  let highestRight = null

  let highestLeftPercentage = 0
  let highestRightPercentage = 0

  allValidNews.forEach((newsItem) => {
    const articlesForBiasCalculation = newsItem.news.map((article) => {
      const domain = extractDomain(article.url)
      return { ...article, domain }
    })

    const bias = calculateBiasPercentages(articlesForBiasCalculation, sources)

    if (parseFloat(bias.leftPercentage) > highestLeftPercentage) {
      highestLeftPercentage = parseFloat(bias.leftPercentage)
      highestLeft = { article: newsItem.news[0], bias }
    }

    if (parseFloat(bias.rightPercentage) > highestRightPercentage) {
      highestRightPercentage = parseFloat(bias.rightPercentage)
      highestRight = { article: newsItem.news[0], bias }
    }
  })

  return {
    highestLeft,
    highestCenter,
    highestRight,
  }
}
