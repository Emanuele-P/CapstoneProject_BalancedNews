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
import pic from '../../assets/svg/sourceLogo.svg'
import { getTimeDifference } from '../../utils/timeUtils'
import { filterValidArticles } from '../../utils/urlUtils'
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
  const { isAuthenticated } = useSelector((state) => state.auth)

  const { mainArticle, relatedArticles } = (() => {
    for (const newsItem of news.top_news) {
      const foundArticle = newsItem.news.find((article) => article.id === parseInt(id))
      if (foundArticle) {
        return {
          mainArticle: foundArticle,
          relatedArticles: newsItem.news.filter((article) => article.id !== parseInt(id)),
        }
      }
    }
    return { mainArticle: null, relatedArticles: [] }
  })()

  const combinedArticles = [mainArticle, ...relatedArticles]

  const validArticles = filterValidArticles(combinedArticles)

  // const uniqueRelatedArticles = filterUniqueDomains(validArticles)

  const uniqueDomains = new Set()
  const uniqueRelatedArticles = validArticles.filter((article) => {
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
    validArticles,
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

  // console.log('valid', validArticles)

  const handleLoadMore = () => {
    setDisplayedArticles((prevCount) => prevCount + 5)
  }

  const source = mainArticle ? sources[extractDomain(mainArticle.url)] : {}
  const url = new URL(mainArticle.url)
  const displayDomain = url.hostname.replace('www.', '').split('.')[0]
  const maxBias = getMaxBias(leftPercentage, centerPercentage, rightPercentage)
  const totalArticles = left.length + center.length + right.length

  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
      <Container className="mt-3 mb-5 article">
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
                      <Col lg={4}>
                        <Image fluid src={pic} className="s-logo" />
                      </Col>
                      <Col lg={1} />
                      <Col lg={7}>
                        <CardText>{getTimeDifference(mainArticle.publish_date)}</CardText>
                        <CardSubtitle className="mb-2">
                          {source?.name || displayDomain || 'Unknown source'}
                        </CardSubtitle>
                        <CardText>Country</CardText>
                        <CardSubtitle className="mb-2">{mainArticle.source_country.toUpperCase()}</CardSubtitle>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                <Card className="article-card info-card source fact mt-1">
                  {isAuthenticated ? (
                    <>
                      <CardBody>
                        <Row className="mb-4">
                          <Col lg={6}>
                            <CardText>Popularity</CardText>
                            <CardSubtitle>{source?.trafficPopularity || 'Medium Traffic'}</CardSubtitle>
                          </Col>
                          <Col lg={6}>
                            <CardText>Media Type</CardText>
                            <CardSubtitle>{source?.mediaType || 'News Website'}</CardSubtitle>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col lg={6}>
                            <CardText>Bias</CardText>
                            <CardSubtitle>{source?.biasRating || 'Center'}</CardSubtitle>
                          </Col>
                          <Col lg={6}>
                            <CardText>Factuality</CardText>
                            <CardSubtitle>{source?.factualReporting || 'High'}</CardSubtitle>
                          </Col>
                        </Row>
                        <FactualityBar bias={source?.biasRating} />
                      </CardBody>
                    </>
                  ) : (
                    <>
                      <CardBody className="d-flex flex-column justify-content-center gap-4">
                        <Row>
                          <div className="flex justify-content-between p-0">
                            <h6 className="p-0 m-0">
                              To view factuality data please <Link to={'/'}>log in</Link>
                            </h6>
                            <i className="bi bi-lock-fill p-0"></i>
                          </div>
                        </Row>
                        <Row>
                          <div className="fake-bar"></div>
                        </Row>
                      </CardBody>
                    </>
                  )}
                </Card>

                <Card className="article-card info-card">
                  <CardBody>
                    <CardTitle>Bias Distribution</CardTitle>
                    <CardText>
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
        <Nav defaultActiveKey="link" className="article-selection mt-4 mb-3">
          <Nav.Item className="ms-2">{totalArticles} Articles</Nav.Item>
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
