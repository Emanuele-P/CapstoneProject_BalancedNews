import { Card } from 'react-bootstrap'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function RightCard({ article }) {
  return (
    <>
      <Link to={`/article/${article.id}`} className="s-cards-link">
        <Card className="w-100 right-card mb-2 border-bottom">
          <Card.Body className="py-2 px-0">
            <Card.Title>
              {article.author || 'Unknown Author'} ・ {article.source_country.toUpperCase()}
            </Card.Title>
            <Card.Text>{article.title || 'No title available'}</Card.Text>
            <div className="d-flex align-items-center gap-3">
              <BiasBar />
              <span>percentages</span>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

RightCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    author: PropTypes.string,
    source_country: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default RightCard
