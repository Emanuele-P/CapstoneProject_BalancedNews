/* eslint-disable react/prop-types */
import { Button, Col, Image, Row } from 'react-bootstrap'
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
  const [leftCardCount, setLeftCardCount] = useState(3)

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

  const filteredArticles =
    title === 'Israel-Hamas Conflict'
      ? validTrendingNews
          .slice(1, 2)
          .concat(validTrendingNews.slice(3, 8))
          .concat(validTrendingNews.slice(9, 18))
          .concat(validTrendingNews.slice(20, 21))
      : title === 'Olympics'
      ? validTrendingNews.slice(0, 11).concat(validTrendingNews.slice(15, 20)).concat(validTrendingNews.slice(22, 26))
      : title === 'European Politics'
      ? validTrendingNews.slice(0, 14)
      : validTrendingNews

  return (
    <>
      <div className="flex">
        <Image src={trend} className="mb-2 me-2 blinking" />
        <h2 className="mt-0 mb-2">{title}</h2>
      </div>
      <Row className="flex-row mb-4 pb-4 central-bottom border-bottom">
        <Col lg={8} ref={trendingSectionRef} className="d-flex flex-column justify-content-between">
          {filteredArticles.length > 0 && <CentralCarousel news={filteredArticles} />}
          {filteredArticles.slice(3, 9).map((article) => (
            <CentralCardTrending key={article.id} article={article} />
          ))}
        </Col>
        <Col
          lg={4}
          className="trending-left-aside d-flex flex-column justify-content-between"
          style={{ maxHeight: trendingSectionHeight }}
        >
          <div>
            {filteredArticles.slice(10, 10 + leftCardCount).map((article) => (
              <LeftCardTrending key={article.id} article={article} />
            ))}
          </div>
          {filteredArticles.length > 10 + leftCardCount && (
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
