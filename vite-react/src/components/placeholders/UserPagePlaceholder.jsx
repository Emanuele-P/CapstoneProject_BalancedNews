import { Row, Col, Placeholder } from 'react-bootstrap'

function UserPagePlaceholder() {
  return (
    <>
      <h4 className="mb-4">
        <Placeholder animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
      </h4>
      <Row className="border-bottom pb-4 mx-0 mb-4">
        <Col lg={2} className="ps-0">
          <Placeholder animation="glow">
            <Placeholder className="w-100" style={{ height: '148px', borderRadius: '99px' }} />
          </Placeholder>
        </Col>
        <Col lg={4} className="d-flex flex-column justify-content-center">
          <Placeholder as="h6" animation="glow">
            <Placeholder xs={7} />
          </Placeholder>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={9} />
          </Placeholder>
        </Col>
        <Col lg={{ span: 2, offset: 4 }} className="d-flex align-items-center justify-content-end">
          <Placeholder animation="glow">
            <Placeholder xs={8} className="placeholder-button" />
          </Placeholder>
        </Col>
      </Row>

      {Array.from({ length: 2 }).map((_, index) => (
        <>
          <Row key={index} className="border-bottom pb-4 mx-0 mb-4">
            <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
              <Placeholder as="h5" animation="glow" className="mt-1 mb-4">
                <Placeholder xs={5} />
              </Placeholder>
              <Placeholder as="h6" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={8} />
              </Placeholder>
            </Col>
            <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-center justify-content-end">
              <Placeholder animation="glow">
                <Placeholder xs={6} className="placeholder-button" />
              </Placeholder>
            </Col>
          </Row>
          {Array.from({ length: 2 }).map((_, innerIndex) => (
            <Row key={innerIndex} className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                <Placeholder as="h6" animation="glow">
                  <Placeholder xs={4} />
                </Placeholder>
                <Placeholder as="span" animation="glow">
                  <Placeholder xs={8} />
                </Placeholder>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-center justify-content-end">
                <Placeholder animation="glow">
                  <Placeholder xs={6} className="placeholder-button" />
                </Placeholder>
              </Col>
            </Row>
          ))}
        </>
      ))}
    </>
  )
}

export default UserPagePlaceholder
