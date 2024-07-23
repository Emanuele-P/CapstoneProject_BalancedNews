import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import BiasBar from '../BiasBar'
import FactualityBar from './FactualityBar'

function ArticlesPage() {
  const leftPercentage = 'L33%'
  const centerPercentage = 'C34%'
  const rightPercentage = 'R33%'

  const factuality = 'HIGH'
  const bias = 'Least Biased'

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
    </Container>
  )
}
export default ArticlesPage
