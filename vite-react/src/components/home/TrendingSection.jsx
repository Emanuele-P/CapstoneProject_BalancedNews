/* eslint-disable react/prop-types */
import { Button, Col, Image, Row, Spinner } from 'react-bootstrap'
import CentralCarousel from './CentralCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getTrendingNews } from '../../redux/actions/newsActions'
import LeftCardTrending from './LeftCardTrending'
import trend from '../../assets/icons/trending.svg'
import CentralCardTrending from './CentralCardTrending'
import { useDynamicHeight } from '../../utils/heightUtils'

function TrendingSection({ title, query }) {
  const dispatch = useDispatch()
  const trendingNews = useSelector((state) => state.news.trendingNews[query])
  const loading = useSelector((state) => state.news.loading)
  const [leftCardCount, setLeftCardCount] = useState(2)

  const trendingSectionRef = useRef(null)
  const trendingSectionHeight = useDynamicHeight(trendingSectionRef)

  useEffect(() => {
    if (!trendingNews) {
      dispatch(getTrendingNews(query))
    }
  }, [])

  const isArticleValid = (article) => {
    return article.author && article.image && article.title && article.summary
  }

  const validTrendingNews = trendingNews?.news?.filter(isArticleValid) || []

  const handleLoadMore = () => {
    setLeftCardCount(leftCardCount + 2)
  }

  return (
    <>
      <div className="flex">
        <Image src={trend} className="mb-2 me-2 blinking" />
        <h2 className="mt-0 mb-2">{title}</h2>
      </div>
      <Row className="flex-row mb-4 pb-4 central-bottom border-bottom">
        <Col lg={8} ref={trendingSectionRef} className="d-flex flex-column  justify-content-between">
          {loading ? (
            <Spinner animation="border" />
          ) : (
            validTrendingNews.length > 0 && <CentralCarousel news={trendingNews.news} />
          )}
          {validTrendingNews.slice(3, 7).map((article) => (
            <CentralCardTrending key={article.id} article={article} />
          ))}
        </Col>
        <Col
          lg={4}
          className="trending-left-aside d-flex flex-column justify-content-between"
          style={{ maxHeight: trendingSectionHeight }}
        >
          <div>
            {validTrendingNews.slice(8, 8 + leftCardCount).map((article) => (
              <LeftCardTrending key={article.id} article={article} />
            ))}
          </div>
          {validTrendingNews.length > 8 + leftCardCount && (
            <div className="border-top">
              <Button className="mt-4 w-100 more-btn" onClick={handleLoadMore}>
                Load more
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </>
  )
}

export default TrendingSection
