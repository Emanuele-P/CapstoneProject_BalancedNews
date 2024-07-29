/* eslint-disable react/prop-types */
import { Col, Row, Spinner } from 'react-bootstrap'
import CentralCarousel from './CentralCarousel'
import CentralCard from './CentralCard'
import LeftCard from './LeftCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTrendingNews } from '../../redux/actions/newsActions'

function TrendingSection({ title }) {
  const dispatch = useDispatch()
  const { trendingNews, loading } = useSelector((state) => state.news)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    if (!trendingNews || trendingNews.length === 0) {
      if (!hasFetched) {
        dispatch(getTrendingNews('olympics'))
        setHasFetched(true)
      }
    }
  }, [dispatch, trendingNews, hasFetched])

  return (
    <>
      <h2 className="mt-0 mb-2">{title}</h2>
      <Row className="flex-row mb-3 central-bottom">
        <Col lg={8} className="pb-3">
          {loading ? <Spinner animation="border" /> : <CentralCarousel news={trendingNews} />}
          <CentralCard />
          <CentralCard />
          <CentralCard />
          <CentralCard />
        </Col>
        <Col lg={4}>
          <LeftCard />
          <LeftCard />
        </Col>
      </Row>
    </>
  )
}

export default TrendingSection
