import { Col } from 'react-bootstrap'
import LeftCard from './LeftCard'

function LeftAside() {
  return (
    <Col lg={3} className="left-aside">
      <h6 className="mb-3">Stories disproportionately reported by the Left, the Center or the Right</h6>
      <LeftCard />
    </Col>
  )
}

export default LeftAside
