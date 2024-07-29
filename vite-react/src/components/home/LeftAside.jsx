import { Col, Image } from 'react-bootstrap'
import LeftCard from './LeftCard'
import banner from '../../assets/svg/banner.svg'

function LeftAside() {
  return (
    <Col lg={3} className="left-aside">
      <div className="banner">
        <h2 className="display-4 mt-0">
          <i className="bi bi-circle-half"></i>versight
        </h2>
        <Image src={banner} />
      </div>
      <h6 className="mb-3">Stories disproportionately reported by the Right, the Left or the Center</h6>
      <LeftCard borderClass="right-border" />
      <LeftCard borderClass="left-border" />
      <LeftCard borderClass="center-border" />
    </Col>
  )
}

export default LeftAside
