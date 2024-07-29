/* eslint-disable react/prop-types */
import { Card, Col, Row } from 'react-bootstrap'
import pic from '../../assets/cardpic.webp'
import { Link } from 'react-router-dom'
import SentimentBar from '../SentimentBar'

function CentralCardTrending({ article }) {
  if (!article) {
    return null
  }

  return (
    <>
      <Link to={article.url}>
        <Card className="w-100 central-card p-0 mb-2">
          <Row>
            <Col md={3} className="pe-0">
              <div className="central-card-pic-container">
                <Card.Img variant="left" src={article.image || pic} className="central-card-pic" />
              </div>
            </Col>
            <Col md={9}>
              <Card.Body className="p-0">
                <Card.Title>
                  {article.author || 'Unknown Author'} ・ {article.source_country.toUpperCase()}
                </Card.Title>
                <Card.Text>{article.title || 'No title available'}</Card.Text>
                <div className="flex gap-3 justify-content-between">
                  <SentimentBar sentiment={article.sentiment} />
                  <span>Read full article</span>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Link>
    </>
  )
}

export default CentralCardTrending
