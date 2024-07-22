import { Col } from 'react-bootstrap'
import RightCard from './RightCard'
function RightAside() {
  return (
    <Col lg={3} className="right-aside hmsc pt-0">
      <h6 className="m-0">Latest news</h6>
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
      <RightCard />
    </Col>
  )
}

export default RightAside
