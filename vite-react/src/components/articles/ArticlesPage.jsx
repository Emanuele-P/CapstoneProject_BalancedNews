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

function ArticlesPage() {
  const leftPercentage = 'L33%'
  const centerPercentage = 'C34%'
  const rightPercentage = 'R33%'

  const factuality = 'HIGH'
  const bias = 'Least Biased'

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
      break
    }
  }

  const uniqueDomains = new Set()
  const uniqueRelatedArticles = relatedArticles.filter((article) => {
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

  const categorizeArticles = (articles) => {
    const left = []
    const center = []
    const right = []

    articles.forEach((article) => {
      const domain = extractDomain(article.url)
      const source = sources[domain]
      if (source) {
        switch (source.biasRating) {
          case 'Left':
          case 'Left-Center':
            left.push(article)
            break
          case 'Right':
          case 'Right-Center':
            right.push(article)
            break
          default:
            center.push(article)
        }
      }
    })

    return { left, center, right }
  }

  const { left, center, right } = categorizeArticles(uniqueRelatedArticles)

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

  const source = mainArticle ? sources[extractDomain(mainArticle.url)] : {}

  return (
    <Container className="my-3">
      {mainArticle && (
        <>
          <span>
            Published on {new Date(mainArticle.publish_date).toLocaleDateString()} •{' '}
            {mainArticle.source_country.toUpperCase()}
          </span>
          <h2>{mainArticle.title}</h2>

          <Row>
            <Col xs={7}>
              <p className="article-text">{mainArticle.text || 'No content available'}</p>
              <Link to={mainArticle.url}>
                <span className="span-link">Read full article</span>
              </Link>
            </Col>

            <Col xs={5}>
              <Card className="article-card source mt-1">
                <CardBody>
                  <Row className="flex">
                    <Col lg={3}>
                      <Image fluid src={pic} />
                    </Col>
                    <Col lg={5}>
                      <CardText>{getTimeDifference(mainArticle.publish_date)}</CardText>
                      <CardSubtitle className="mb-2">{source?.name || 'Unknown source'}</CardSubtitle>
                      <CardText>Media Type</CardText>
                      <CardSubtitle>{source?.mediaType || 'Website'}</CardSubtitle>
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

              <Card className="article-card">
                <CardBody>
                  <CardText className="mb-2">
                    Factuality: {source?.factualReporting || factuality || 'Factuality'}
                  </CardText>
                  <CardText>Bias: {source?.biasRating || bias || 'Bias'}</CardText>
                  <FactualityBar bias={bias} />
                </CardBody>
              </Card>

              <Card className="article-card">
                <CardBody>
                  <CardTitle>Bias Distribution</CardTitle>
                  <CardText> • max% of the sources are Center</CardText>
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
        <Nav.Item>N of Articles</Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="all" onClick={() => handleFilterChange('all')}>
            All <Badge>{uniqueRelatedArticles.length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="left" onClick={() => handleFilterChange('left')}>
            Left <Badge>{left.length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="center" onClick={() => handleFilterChange('center')}>
            Center <Badge>{center.length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="right" onClick={() => handleFilterChange('right')}>
            Right <Badge>{right.length}</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {filteredArticles.slice(0, displayedArticles).map((article, index) => (
        <SourceCard key={index} article={article} />
      ))}

      {displayedArticles < relatedArticles.length && (
        <Button className="my-3 btn-info" onClick={handleLoadMore}>
          More articles
        </Button>
      )}
    </Container>
  )
}
export default ArticlesPage
