/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'

function RightCard({ article, biasPercentages }) {
  return (
    <>
      <Link to={`/article/${article.id}`} className="s-cards-link">
        <Card className="w-100 right-card">
          <Card.Body className="p-2">
            <Card.Title>
              {article.author || 'Unknown Author'} ・ {article.source_country.toUpperCase()}
            </Card.Title>
            <Card.Text>{article.title || 'No title available'}</Card.Text>
            <div className="d-flex align-items-center gap-3">
              <BiasBar
                leftPercentage={biasPercentages.leftPercentage || '0%'}
                centerPercentage={biasPercentages.centerPercentage || '100%'}
                rightPercentage={biasPercentages.rightPercentage || '0%'}
              />
              <span>percentages</span>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default RightCard
