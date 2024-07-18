import { Col, Image } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'
import CentralCard from './CentralCard'

function MainSection() {
  return (
    <Col lg={6} className="main-section hmsc pt-0">
      <section className="hero-wrapper">
        <Image src={hero} className="hero w-100"></Image>
        <div className="hero-overlay"></div>
        <h3 className="hero-title">
          News title Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore non harum optio voluptatem
          inventore commodi necessitatibus doloribus, asperiores in rerum, fuga quas. Blanditiis magni hic, cumque
          nesciunt earum itaque!
        </h3>
      </section>
      <h2>Latest news</h2>
      <CentralCard />
      <div className="separator"></div>
    </Col>
  )
}

export default MainSection
