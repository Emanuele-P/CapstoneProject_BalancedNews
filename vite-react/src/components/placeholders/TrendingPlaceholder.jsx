import { Col, Row, Placeholder, Card } from 'react-bootstrap'
import CentralCardPlaceholder from './CentralCardPlaceholder'
import TrendingRight from './TrendingRight'
import { useSelector } from 'react-redux'

function TrendingPlaceholder() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <>
      <h2 className="m-0 mb-2 mt-2">
        <Placeholder animation="glow">
          <Placeholder xs={3} />
        </Placeholder>
      </h2>
      <Row className="flex-row mb-4 pb-4 central-bottom border-bottom">
        <Col lg={8} className="d-flex flex-column justify-content-start">
          <Placeholder
            as={Card}
            animation="glow"
            style={{
              height: '50vh',
              background: `${theme === 'light' ? '#e9e9e9' : '#505050'}`,
              borderRadius: '0',
              border: '1px solid transparent',
            }}
            className="mb-4"
          >
            <Card.Body className="d-flex flex-column justify-content-end p-0">
              <Placeholder as={Card.Text} animation="glow" className="px-2">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Placeholder>

          {Array.from({ length: 4 }).map((_, index) => (
            <CentralCardPlaceholder key={index} />
          ))}
        </Col>
        <Col
          lg={4}
          className="trending-left-aside d-flex flex-column justify-content-between"
          style={{ maxHeight: 'placeholder-height' }}
        >
          <div>
            {Array.from({ length: 2 }).map((_, index) => (
              <TrendingRight key={index} />
            ))}
          </div>
          <div className="border-top">
            <Placeholder.Button
              xs={6}
              className="mt-4 w-100"
              style={{ borderRadius: '6px', background: '#676767', border: '1px solid transparent', height: '38px' }}
              animation="glow"
            />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TrendingPlaceholder
