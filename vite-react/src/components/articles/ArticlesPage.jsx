import { Badge, Button, Card, CardBody, CardText, CardTitle, Col, Container, Nav, Row } from 'react-bootstrap'
import BiasBar from '../BiasBar'
import FactualityBar from './FactualityBar'
import SourceCard from './SourceCard'
import { useState } from 'react'

function ArticlesPage() {
  const leftPercentage = 'L33%'
  const centerPercentage = 'C34%'
  const rightPercentage = 'R33%'

  const factuality = 'HIGH'
  const bias = 'Least Biased'

  const [displayedArticles, setDisplayedArticles] = useState(5)
  const allArticles = Array.from({ length: 20 }, (_, index) => index + 1)

  const handleLoadMore = () => {
    setDisplayedArticles((prevCount) => prevCount + 5)
  }

  return (
    <Container className="my-3">
      <span>Published n days ago • Country</span>
      <h2>Article title</h2>
      <p>
        Article first sentences (if present in api). Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        reiciendis consectetur amet blanditiis quaerat dolor iste, maxime omnis vero magnam. Ut pariatur repudiandae
        fuga voluptatibus aliquam quia voluptas libero animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat obcaecati suscipit inventore! Assumenda ut doloribus ex asperiores, voluptatum nihil velit at ad
        doloremque odio consequatur ducimus omnis non, facilis adipisci!
      </p>
      <Row>
        <Col xs={6}>
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

        <Col xs={6}>
          <Card className="article-card">
            <CardBody>
              <CardText className="mb-2">Factuality: {factuality}</CardText>
              <CardText>Bias: {bias}</CardText>
              <FactualityBar bias={bias} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Nav variant="underline" defaultActiveKey="link" className="article-selection mt-4 mb-3 border-bottom">
        <Nav.Item>N of Articles</Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link">
            All <Badge>10</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            Left <Badge>10</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            Center <Badge>10</Badge>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Right <Badge>10</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {allArticles.slice(0, displayedArticles).map((article, index) => (
        <SourceCard key={index} />
      ))}

      {displayedArticles < allArticles.length && (
        <Button className="my-3 btn-info" onClick={handleLoadMore}>
          More articles
        </Button>
      )}
    </Container>
  )
}
export default ArticlesPage
