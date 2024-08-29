/* eslint-disable react/prop-types */
import { Col, Image } from 'react-bootstrap'
import LeftCard from './LeftCard'
import banner from '../../assets/svg/banner.svg'
import darkBanner from '../../assets/svg/banner-dark.svg'
import { useSelector } from 'react-redux'

function LeftAside({ highestLeft, highestRight, scrollTop }) {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <Col lg={3} className="left-aside mb-0">
      <div className="banner">
        <h2 className="display-4 mt-0">
          <i className="bi bi-circle-half"></i>versight
        </h2>
        <Image src={theme === 'light' ? banner : darkBanner} alt="Banner" />
      </div>
      <h6 className={scrollTop > 72 ? 'scrolled' : ''}>Stories disproportionately reported by the Left or the Right</h6>
      {highestRight && <LeftCard borderClass="right-border" article={highestRight.article} bias={highestRight.bias} />}
      {highestLeft && <LeftCard borderClass="left-border" article={highestLeft.article} bias={highestLeft.bias} />}
    </Col>
  )
}

export default LeftAside
