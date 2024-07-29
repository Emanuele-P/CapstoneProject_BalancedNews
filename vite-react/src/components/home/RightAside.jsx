import { Button, Col, Spinner } from 'react-bootstrap'
import RightCard from './RightCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTopNews } from '../../redux/actions/newsActions'

function RightAside() {
  const dispatch = useDispatch()
  const { loading, news } = useSelector((state) => state.news)

  useEffect(() => {
    dispatch(getTopNews())
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
    ? news.top_news.slice(7, 17).flatMap((newsItem) => {
        return getValidArticle(newsItem.news)
      })
    : []
  console.log('Selected News:', selectedNews)

  return (
    <Col lg={3} className="right-aside hmsc pt-0">
      {loading && <Spinner animation="border" />}
      {!loading && (
        <>
          <h6 className="m-0 pb-1 mb-3 border-bottom">Latest news</h6>
          {selectedNews.map((article) => (
            <RightCard key={article.id} article={article} />
          ))}
          <Button className="mt-1 w-100 login-button">Load more</Button>
        </>
      )}
    </Col>
  )
}

export default RightAside
