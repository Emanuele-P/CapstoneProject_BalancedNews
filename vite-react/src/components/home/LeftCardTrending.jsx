/* eslint-disable react/prop-types */
import { Card, Row } from 'react-bootstrap'
import pic from '../../assets/leftpic.webp'
import { Link } from 'react-router-dom'
import SentimentBar from '../SentimentBar'

function LeftCardTrending({ article }) {
  if (!article) {
    return null
  }

  return (
    <>
      <Link to={article.url}>
        <Card className={`left-card-trending w-100`}>
          <Row>
            <div className="left-card-pic-container">
              <Card.Img src={article.image || pic} className="left-card-pic" />
            </div>
            <Card.Body>
              <div className="d-flex flex-column">
                <div>
                  <Card.Subtitle>
                    {article.author || 'Unknown Author'} ・ {article.source_country.toUpperCase()}
                  </Card.Subtitle>
                  <Card.Title>{article.title || 'No title available'}</Card.Title>
                </div>
                <SentimentBar sentiment={article.sentiment} />
              </div>
            </Card.Body>
          </Row>
        </Card>
      </Link>
    </>
  )
}

export default LeftCardTrending
