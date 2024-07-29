/* eslint-disable react/prop-types */
import { Button, Col, Image, Row, Spinner } from 'react-bootstrap'
import CentralCarousel from './CentralCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTrendingNews } from '../../redux/actions/newsActions'
import LeftCardTrending from './LeftCardTrending'
import trend from '../../assets/icons/trending.svg'
import CentralCardTrending from './CentralCardTrending'

function TrendingSection({ title, query }) {
  const dispatch = useDispatch()
  const trendingNews = useSelector((state) => state.news.trendingNews[query])
  const loading = useSelector((state) => state.news.loading[query])

  useEffect(() => {
    if (!trendingNews) {
      dispatch(getTrendingNews(query))
    }
  }, [dispatch, query, trendingNews])

  return (
    <>
      <div className="flex">
        <Image src={trend} className="mb-2 me-2" />
        <h2 className="mt-0 mb-2">{title}</h2>
      </div>
      <Row className="flex-row mb-4 central-bottom border-bottom pb-2">
        <Col lg={8} className="pb-2">
          {loading ? <Spinner animation="border" /> : trendingNews && <CentralCarousel news={trendingNews.news} />}
          {trendingNews?.news?.slice(3, 7).map((article) => (
            <CentralCardTrending key={article.id} article={article} />
          ))}
        </Col>
        <Col lg={4}>
          {trendingNews?.news?.slice(8, 10).map((article) => (
            <LeftCardTrending key={article.id} article={article} />
          ))}
          <div className="border-top">
            <Button className="signup-button mt-3 w-100 login-button">Load more</Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TrendingSection
