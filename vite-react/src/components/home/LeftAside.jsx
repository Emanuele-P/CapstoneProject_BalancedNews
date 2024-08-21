/* eslint-disable react/prop-types */
import { Col, Image } from 'react-bootstrap'
import LeftCard from './LeftCard'
import banner from '../../assets/svg/banner.svg'

function LeftAside({ highestLeft, highestRight, scrollTop }) {
  return (
    <Col lg={3} className="left-aside">
      <div className="banner">
        <h2 className="display-4 mt-0">
          <i className="bi bi-circle-half"></i>versight
        </h2>
        <Image src={banner} />
      </div>
      <h6 className={scrollTop > 72 ? 'scrolled' : ''}>Stories disproportionately reported by the Left or the Right</h6>
      {highestRight && <LeftCard borderClass="right-border" article={highestRight.article} bias={highestRight.bias} />}
      {highestLeft && <LeftCard borderClass="left-border" article={highestLeft.article} bias={highestLeft.bias} />}
    </Col>
  )
}

export default LeftAside
