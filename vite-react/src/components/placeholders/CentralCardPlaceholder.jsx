import { Card, Row, Col, Placeholder } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function CentralCardPlaceholder() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <Card
      className="w-100 central-card p-0 mb-2"
      style={{ height: '125px', boxShadow: 'none', background: `${theme === 'light' ? '#e9e9e9' : '#444444'}` }}
    >
      <Row className="h-100">
        <Col md={3} className="pe-0">
          <div className="central-card-pic-container h-100">
            <Placeholder
              as={Card.Img}
              variant="left"
              className="central-card-pic h-100"
              style={{ background: `${theme === 'light' ? '#676767' : '#e2e2e2'}` }}
            />
          </div>
        </Col>
        <Col md={9}>
          <Card.Body className="p-0 d-flex flex-column justify-content-between h-100">
            <div>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} style={{ background: `${theme === 'light' ? '#676767' : '#e2e2e2'}` }} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={8} style={{ background: `${theme === 'light' ? '#676767' : '#e2e2e2'}` }} />
              </Placeholder>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Placeholder animation="glow" xs={3} />
              <span className="percentage">
                <Placeholder animation="glow" xs={4} />
              </span>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default CentralCardPlaceholder
