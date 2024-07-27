import { Col, Spinner } from 'react-bootstrap'
import RightCard from './RightCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getNews } from '../../redux/actions/newsActions'

function RightAside() {
  const dispatch = useDispatch()
  const { loading, news, error } = useSelector((state) => state.news)

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  const getValidArticle = (newsArray) => {
    for (let article of newsArray) {
      if (article.author && article.image && article.title && article.summary) {
        return article
      }
    }
    return newsArray[0]
  }

  const selectedNews = news.top_news
    ? news.top_news.slice(6, 16).flatMap((newsItem) => {
        return getValidArticle(newsItem.news)
      })
    : []
  console.log('Selected News:', selectedNews)

  return (
    <Col lg={3} className="right-aside hmsc pt-0">
      {loading && <Spinner animation="border" />}
      {error && <div className="text-danger">{error}</div>}
      <h6 className="m-0">Latest news</h6>
      {selectedNews.map((article) => (
        <RightCard key={article.id} article={article} />
      ))}
    </Col>
  )
}

export default RightAside
