import { Col, Image } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'

function MainSection() {
  return (
    <Col lg={6} className="main-section hmsc pt-0">
      <section className="hero-wrapper">
        <Image src={hero} className="hero"></Image>
      </section>
      <h2>Latest news</h2>
    </Col>
  )
}

export default MainSection
