import { Card } from 'react-bootstrap'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'

function RightCard() {
  return (
    <>
      <Link to={'/article'} className="s-cards-link">
        <Card className="w-100 right-card mb-2 border-bottom">
          <Card.Body className="py-2 px-0">
            <Card.Title>Source name ・ other info</Card.Title>
            <Card.Text>
              Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis consequuntur
              veniam, possimus fugit nam
            </Card.Text>
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

export default RightCard
