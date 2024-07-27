export const getTimeDifference = (publishDate) => {
  const now = new Date()
  const published = new Date(publishDate)
  const differenceInSeconds = Math.floor((now - published) / 1000)

  const secondsInMinute = 60
  const secondsInHour = 3600
  const secondsInDay = 86400

  if (differenceInSeconds < secondsInMinute) {
    return `${differenceInSeconds} seconds ago`
  } else if (differenceInSeconds < secondsInHour) {
    const minutes = Math.floor(differenceInSeconds / secondsInMinute)
    return `${minutes} minutes ago`
  } else if (differenceInSeconds < secondsInDay) {
    const hours = Math.floor(differenceInSeconds / secondsInHour)
    return `${hours} hours ago`
  } else {
    const days = Math.floor(differenceInSeconds / secondsInDay)
    return `${days} days ago`
  }
}
