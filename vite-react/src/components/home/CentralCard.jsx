import { Card, Col, Row } from 'react-bootstrap'
import pic from '../../assets/cardpic.webp'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'

function CentralCard({ article }) {
  if (!article) {
    return null
  }

  return (
    <>
      <Link to={'/article'}>
        <Card className="w-100 central-card p-0 mb-2">
          <Row>
            <Col md={3} className="pe-0">
              <div className="central-card-pic-container">
                <Card.Img variant="left" src={article.image || pic} className="central-card-pic" />
              </div>
            </Col>
            <Col md={9}>
              <Card.Body className="p-0">
                <Card.Title>{article.author ? article.author : 'Unknown Author'} ・ US</Card.Title>
                <Card.Text>{article.title || 'No title available'}</Card.Text>
                <div className="d-flex align-items-center gap-3">
                  <BiasBar />
                  <span>percentages</span>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Link>
    </>
  )
}

export default CentralCard
