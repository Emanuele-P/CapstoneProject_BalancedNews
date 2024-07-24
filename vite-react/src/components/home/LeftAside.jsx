import { Col } from 'react-bootstrap'
import LeftCard from './LeftCard'

function LeftAside() {
  return (
    <Col lg={3} className="left-aside">
      <h6 className="mb-3">Stories disproportionately reported by the Right, the Left or the Center</h6>
      <LeftCard borderClass="right-border" />
      <LeftCard borderClass="left-border" />
      <LeftCard borderClass="center-border" />
    </Col>
  )
}

export default LeftAside
