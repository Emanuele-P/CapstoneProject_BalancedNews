export const extractDomain = (url) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '').split('/')[0]
    return domain
  } catch (error) {
    console.error('Invalid URL:', url)
    return null
  }
}

export const filterUniqueDomains = (articles) => {
  const uniqueDomains = new Set()
  return articles.filter((article) => {
    const domain = extractDomain(article.url)
    if (uniqueDomains.has(domain)) {
      return false
    }
    uniqueDomains.add(domain)
    return true
  })
}

export const filterValidArticles = (articles) => {
  return articles.filter((article) => article.author && article.image && article.title && article.summary)
}
