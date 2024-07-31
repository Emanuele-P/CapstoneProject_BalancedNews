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
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pic from '../../assets/default-avatar.jpg'
import { getTimeDifference } from '../../utils/timeUtils'

function ArticlesPage() {
  const leftPercentage = 'L33%'
  const centerPercentage = 'C34%'
  const rightPercentage = 'R33%'

  const factuality = 'HIGH'
  const bias = 'Least Biased'

  const { id } = useParams()
  const [displayedArticles, setDisplayedArticles] = useState(5)

  const news = useSelector((state) => state.news.news)
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
    const url = new URL(article.url)
    const domain = url.hostname.replace('www.', '').split('.')[0]
    if (uniqueDomains.has(domain)) {
      return false
    }
    uniqueDomains.add(domain)
    return true
  })

  const handleLoadMore = () => {
    setDisplayedArticles((prevCount) => prevCount + 5)
  }

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
                      <CardSubtitle className="mb-2">Source name</CardSubtitle>
                      <CardText>Media Type</CardText>
                      <CardSubtitle>TV Station/Website</CardSubtitle>
                    </Col>
                    <Col lg={4}>
                      <CardText>Country</CardText>
                      <CardSubtitle className="mb-2">USA</CardSubtitle>
                      <CardText>Popularity</CardText>
                      <CardSubtitle>High Traffic</CardSubtitle>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card className="article-card">
                <CardBody>
                  <CardText className="mb-2">Factuality: {factuality}</CardText>
                  <CardText>Bias: {bias}</CardText>
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
          <Nav.Link eventKey="link">
            All <Badge>{relatedArticles.length}</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            Left <Badge>0</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            Center <Badge>0</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Right <Badge>0</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {uniqueRelatedArticles.slice(0, displayedArticles).map((article, index) => (
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
