import { Card, Row } from 'react-bootstrap'
import pic from '../../assets/leftpic.webp'

function LeftCard() {
  return (
    <>
      <Card className="left-card w-100">
        <Row>
          <div className="left-card-pic-container">
            <Card.Img src={pic} className="left-card-pic" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis consequuntur veniam,
              possimus fugit nam
            </Card.Text>
          </Card.Body>
        </Row>
      </Card>

      <Card className="left-card w-100">
        <Row>
          <div className="left-card-pic-container">
            <Card.Img src={pic} className="left-card-pic" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis consequuntur veniam,
              possimus fugit nam
            </Card.Text>
          </Card.Body>
        </Row>
      </Card>

      <Card className="left-card w-100">
        <Row>
          <div className="left-card-pic-container">
            <Card.Img src={pic} className="left-card-pic" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis consequuntur veniam,
              possimus fugit nam
            </Card.Text>
          </Card.Body>
        </Row>
      </Card>
    </>
  )
}

export default LeftCard
