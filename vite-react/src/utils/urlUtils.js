export const extractDomain = (url) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '').split('/')[0]
    return domain
  } catch (error) {
    console.error('Invalid URL:', url)
    return null
  }
}
