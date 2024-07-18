import { Card, Col, Row } from 'react-bootstrap'
import pic from '../../assets/cardpic.webp'
import BiasBar from '../BiasBar'

function CentralCard() {
  return (
    <>
      <Card className="w-100 central-card p-0 mb-2">
        <Row>
          <Col md={3} className="pe-0">
            <div className="central-card-pic-container">
              <Card.Img variant="left" src={pic} className="central-card-pic" />
            </div>
          </Col>
          <Col md={9}>
            <Card.Body className="p-0">
              <Card.Title>Source name ・ other info</Card.Title>
              <Card.Text>
                Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis
                consequuntur veniam, possimus fugit nam
              </Card.Text>
              <BiasBar />
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="w-100 central-card p-0 mb-2">
        <Row>
          <Col md={3} className="pe-0">
            <div className="central-card-pic-container">
              <Card.Img variant="left" src={pic} className="central-card-pic" />
            </div>
          </Col>
          <Col md={9}>
            <Card.Body className="p-0">
              <Card.Title>Source name ・ other info</Card.Title>
              <Card.Text>
                Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis
                consequuntur veniam, possimus fugit nam
              </Card.Text>
              <BiasBar />
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="w-100 central-card p-0 mb-2">
        <Row>
          <Col md={3} className="pe-0">
            <div className="central-card-pic-container">
              <Card.Img variant="left" src={pic} className="central-card-pic" />
            </div>
          </Col>
          <Col md={9}>
            <Card.Body className="p-0">
              <Card.Title>Source name ・ other info</Card.Title>
              <Card.Text>
                Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis
                consequuntur veniam, possimus fugit nam
              </Card.Text>
              <BiasBar />
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="w-100 central-card p-0 mb-2">
        <Row>
          <Col md={3} className="pe-0">
            <div className="central-card-pic-container">
              <Card.Img variant="left" src={pic} className="central-card-pic" />
            </div>
          </Col>
          <Col md={9}>
            <Card.Body className="p-0">
              <Card.Title>Source name ・ other info</Card.Title>
              <Card.Text>
                Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis
                consequuntur veniam, possimus fugit nam
              </Card.Text>
              <BiasBar />
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card className="w-100 central-card p-0 mb-2">
        <Row>
          <Col md={3} className="pe-0">
            <div className="central-card-pic-container">
              <Card.Img variant="left" src={pic} className="central-card-pic" />
            </div>
          </Col>
          <Col md={9}>
            <Card.Body className="p-0">
              <Card.Title>Source name ・ other info</Card.Title>
              <Card.Text>
                Card title Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate officiis
                consequuntur veniam, possimus fugit nam
              </Card.Text>
              <BiasBar />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default CentralCard
