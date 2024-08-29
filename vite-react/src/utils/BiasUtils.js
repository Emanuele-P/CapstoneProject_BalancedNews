/* eslint-disable no-const-assign */
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
  let leftPercentage = totalSources ? Math.round((left.length / totalSources) * 100) : 0
  let centerPercentage = totalSources ? Math.round((center.length / totalSources) * 100) : 0
  let rightPercentage = totalSources ? Math.round((right.length / totalSources) * 100) : 0

  const totalPercentage = leftPercentage + centerPercentage + rightPercentage

  if (totalPercentage !== 100 && totalSources > 0) {
    const diff = 100 - totalPercentage

    if (leftPercentage >= centerPercentage && leftPercentage >= rightPercentage) {
      leftPercentage += diff
    } else if (centerPercentage >= leftPercentage && centerPercentage >= rightPercentage) {
      centerPercentage += diff
    } else {
      rightPercentage += diff
    }
  }

  return {
    leftPercentage: `${leftPercentage}%`,
    centerPercentage: `${centerPercentage}%`,
    rightPercentage: `${rightPercentage}%`,
    left,
    center,
    right,
  }
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
  let highestRight = null

  let highestLeftPercentage = 0
  let highestRightPercentage = 0

  allValidNews.forEach((newsItem) => {
    const articlesForBiasCalculation = newsItem.news.map((article) => {
      const domain = extractDomain(article.url)
      return { ...article, domain }
    })

    const bias = calculateBiasPercentages(articlesForBiasCalculation, sources)
    const numberOfSources = articlesForBiasCalculation.length

    if (
      parseFloat(bias.leftPercentage) > highestLeftPercentage ||
      (parseFloat(bias.leftPercentage) === highestLeftPercentage &&
        numberOfSources > (highestLeft ? highestLeft.bias.numberOfSources : 0))
    ) {
      highestLeftPercentage = parseFloat(bias.leftPercentage)
      highestLeft = {
        article: newsItem.news[0],
        bias: { ...bias, numberOfSources },
      }
    }

    if (
      parseFloat(bias.rightPercentage) > highestRightPercentage ||
      (parseFloat(bias.rightPercentage) === highestRightPercentage &&
        numberOfSources > (highestRight ? highestRight.bias.numberOfSources : 0))
    ) {
      highestRightPercentage = parseFloat(bias.rightPercentage)
      highestRight = {
        article: newsItem.news[0],
        bias: { ...bias, numberOfSources },
      }
    }
  })

  return {
    highestLeft,
    highestRight,
  }
}
