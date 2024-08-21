import { Container, Row, Col, Placeholder, Image } from 'react-bootstrap'

function UserPagePlaceholder() {
  return (
    <>
      <Container></Container>
      <Container className="user-page">
        <h4 className="mb-4">
          <Placeholder animation="glow">
            <Placeholder xs={2} />
          </Placeholder>
        </h4>
        <Row className="border-bottom pb-4 mx-0 mb-4">
          <Col lg={2} className="ps-0">
            <Placeholder animation="glow">
              <Placeholder className="propic" as={Image} roundedCircle />
            </Placeholder>
          </Col>
          <Col lg={4} className="d-flex flex-column justify-content-center">
            <Placeholder as="h6" animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as="span" animation="glow">
              <Placeholder xs={8} />
            </Placeholder>
          </Col>
          <Col lg={{ span: 2, offset: 4 }} className="d-flex align-items-center justify-content-end">
            <Placeholder animation="glow">
              <Placeholder xs={6} className="placeholder-button" />
            </Placeholder>
          </Col>
        </Row>
        {Array.from({ length: 5 }).map((_, index) => (
          <Row key={index} className="border-bottom pb-4 mx-0 mb-4">
            <Placeholder as="h5" animation="glow">
              <Placeholder xs={2} />
            </Placeholder>
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <Placeholder as="h6" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={8} />
              </Placeholder>
            </Col>
            <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start justify-content-end">
              <Placeholder animation="glow">
                <Placeholder xs={6} className="placeholder-button" />
              </Placeholder>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default UserPagePlaceholder
