import {
  Badge,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Image,
  Nav,
  Row,
} from 'react-bootstrap'
import BiasBar from '../BiasBar'
import FactualityBar from './FactualityBar'
import SourceCard from './SourceCard'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import pic from '../../assets/default-avatar.jpg'
import { getTimeDifference } from '../../utils/timeUtils'
import { getNewsSource } from '../../redux/actions/newsActions'
import { extractDomain } from '../../utils/urlUtils'
import { calculateBiasPercentages, getMaxBias } from '../../utils/BiasUtils'
import AppFooter from '../AppFooter'
import AppNavbar from '../AppNavbar'
import DecorativeNav from '../DecorativeNav'

function ArticlesPage() {
  const { id } = useParams()
  const [displayedArticles, setDisplayedArticles] = useState(5)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('all')

  const { news, sources } = useSelector((state) => ({
    news: state.news.news,
    sources: state.news.newsSource,
  }))

  let mainArticle = null
  let relatedArticles = []

  for (const newsItem of news.top_news) {
    const foundArticle = newsItem.news.find((article) => article.id === parseInt(id))
    if (foundArticle) {
      mainArticle = foundArticle
      relatedArticles = newsItem.news.filter((article) => article.id !== parseInt(id))
    }
  }
  const combinedArticles = [mainArticle, ...relatedArticles]

  const uniqueDomains = new Set()
  const uniqueRelatedArticles = combinedArticles.filter((article) => {
    const domain = extractDomain(article.url)
    if (uniqueDomains.has(domain)) {
      return false
    }
    uniqueDomains.add(domain)
    return true
  })

  useEffect(() => {
    if (mainArticle) {
      const domain = extractDomain(mainArticle.url)
      if (domain) {
        uniqueDomains.add(domain)
        dispatch(getNewsSource(domain))
      }
    }
    relatedArticles.forEach((article) => {
      const domain = extractDomain(article.url)
      if (domain && !uniqueDomains.has(domain)) {
        uniqueDomains.add(domain)
        dispatch(getNewsSource(domain))
      }
    })
  }, [])

  const { leftPercentage, centerPercentage, rightPercentage, left, center, right } = calculateBiasPercentages(
    uniqueRelatedArticles,
    sources
  )

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setDisplayedArticles(5)
  }

  const filteredArticles = (() => {
    switch (filter) {
      case 'left':
        return left
      case 'center':
        return center
      case 'right':
        return right
      default:
        return uniqueRelatedArticles
    }
  })()

  const handleLoadMore = () => {
    setDisplayedArticles((prevCount) => prevCount + 5)
  }

  const source = mainArticle ? sources[extractDomain(mainArticle.url)] : null
  const url = new URL(mainArticle.url)
  const displayDomain = url.hostname.replace('www.', '').split('.')[0]
  const maxBias = getMaxBias(leftPercentage, centerPercentage, rightPercentage)

  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
      <Container className="mt-3 mb-5">
        {mainArticle && (
          <>
            <span>
              Published on {new Date(mainArticle.publish_date).toLocaleDateString()} •{' '}
              {mainArticle.source_country.toUpperCase()}
            </span>
            <h2>{mainArticle.title}</h2>

            <Row>
              <Col xs={6}>
                <p className="article-text">{mainArticle.text || 'No content available'}</p>
                <Link to={mainArticle.url}>
                  <span className="span-link">Read full article</span>
                </Link>
              </Col>

              <Col lg={1}></Col>

              <Col xs={5}>
                <Card className="article-card info-card source mt-1">
                  <CardBody>
                    <Row className="flex">
                      <Col lg={3}>
                        <Image fluid src={pic} />
                      </Col>
                      <Col lg={5}>
                        <CardText>{getTimeDifference(mainArticle.publish_date)}</CardText>
                        <CardSubtitle className="mb-2">
                          {source?.name || displayDomain || 'Unknown source'}
                        </CardSubtitle>
                        <CardText>Media Type</CardText>
                        <CardSubtitle>{source?.mediaType || 'News Website'}</CardSubtitle>
                      </Col>
                      <Col lg={4}>
                        <CardText>Country</CardText>
                        <CardSubtitle className="mb-2">{mainArticle.source_country.toUpperCase()}</CardSubtitle>
                        <CardText>Popularity</CardText>
                        <CardSubtitle>{source?.trafficPopularity || 'Medium Traffic'}</CardSubtitle>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                <Card className="article-card info-card fact">
                  <CardBody>
                    <CardText className="mb-2">Factuality: {source?.factualReporting || 'High'}</CardText>
                    <CardText>Bias: {source?.biasRating || 'Center'}</CardText>
                    <FactualityBar bias={source?.biasRating} />
                  </CardBody>
                </Card>

                <Card className="article-card info-card">
                  <CardBody>
                    <CardTitle>Bias Distribution</CardTitle>
                    <CardText>
                      {' '}
                      • {maxBias.value}% of the sources are {maxBias.type}
                    </CardText>
                    <BiasBar
                      leftPercentage={leftPercentage}
                      centerPercentage={centerPercentage}
                      rightPercentage={rightPercentage}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </>
        )}
        <Nav variant="underline" defaultActiveKey="link" className="article-selection mt-4 mb-3 border-bottom">
          <Nav.Item className="ms-2">{uniqueRelatedArticles.length} Articles</Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="all" onClick={() => handleFilterChange('all')}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="left" onClick={() => handleFilterChange('left')} disabled={left.length === 0}>
              Left <Badge>{left.length}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="center" onClick={() => handleFilterChange('center')} disabled={center.length === 0}>
              Center <Badge>{center.length}</Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="right" onClick={() => handleFilterChange('right')} disabled={right.length === 0}>
              Right <Badge>{right.length}</Badge>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {filteredArticles.slice(0, displayedArticles).map((article, index) => (
          <SourceCard key={index} article={article} />
        ))}

        {displayedArticles < filteredArticles.length && (
          <Row className="justify-content-center">
            <Col lg={2}>
              <Button className="my-3 whi-btn w-100" onClick={handleLoadMore}>
                More articles
              </Button>
            </Col>
          </Row>
        )}
      </Container>
      <AppFooter />
    </>
  )
}
export default ArticlesPage
