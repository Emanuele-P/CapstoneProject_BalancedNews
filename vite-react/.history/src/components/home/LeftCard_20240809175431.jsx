/* eslint-disable react/prop-types */
import { Badge, Card, Row } from 'react-bootstrap'
import pic from '../../assets/leftpic.webp'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'

function LeftCard({ borderClass, article, bias }) {
  if (!article) return null
  console.log(article)

  return (
    <>
      <Link to={`/article/${article.id}`}>
        <Card className={`left-card w-100 ${borderClass}`}>
          <Row>
            <div className="left-card-pic-container">
              <Card.Img src={article.image || pic} className="left-card-pic" />
            </div>
            <Card.Body>
              <Badge>{bias.rightPercentage > bias.leftPercentage ? 'For the Left' : 'For the right'}</Badge>
              <Card.Title>{article.title || 'No title available'}</Card.Title>
              <BiasBar
                leftPercentage={bias.leftPercentage || '0%'}
                centerPercentage={bias.centerPercentage || '0%'}
                rightPercentage={bias.rightPercentage || '0%'}
              />
            </Card.Body>
          </Row>
        </Card>
      </Link>
    </>
  )
}

export default LeftCard
