import { Badge, Card, Row } from 'react-bootstrap'
import pic from '../../assets/leftpic.webp'
import BiasBar from '../BiasBar'

function LeftCard() {
  const leftPercentage = 'L33%'
  const centerPercentage = 'C34%'
  const rightPercentage = 'R33%'

  return (
    <>
      <Card className="left-card w-100">
        <Row>
          <div className="left-card-pic-container">
            <Card.Img src={pic} className="left-card-pic" />
          </div>
          <Card.Body>
            <Badge>n Sources</Badge>
            <Card.Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis consequuntur veniam,
              possimus fugit nam
            </Card.Title>
            <BiasBar
              leftPercentage={leftPercentage}
              centerPercentage={centerPercentage}
              rightPercentage={rightPercentage}
            />
          </Card.Body>
        </Row>
      </Card>
    </>
  )
}

export default LeftCard
