import { Col, Row } from 'react-bootstrap'
import LeftAsidePlaceholder from './LeftAsidePlaceholder'
import HeroPlaceholder from './HeroPlaceholder'
import RightAsidePlaceholder from './RightAsidePlaceholder'

function HomePlaceholder() {
  return (
    <Row>
      <Col lg={3}>
        <LeftAsidePlaceholder />
      </Col>
      <Col lg={6}>
        <HeroPlaceholder />
      </Col>
      <Col lg={3}>
        <RightAsidePlaceholder />
      </Col>
    </Row>
  )
}

export default HomePlaceholder
