import { Col, Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import LeftAside from './LeftAside'
import MainSection from './MainSection'
import RightAside from './RightAside'
import CentralCarousel from './CentralCarousel'
import CentralCard from './CentralCard'
import LeftCard from './LeftCard'

function HomePage() {
  return (
    <>
      <CategoriesSlider />
      <Container className="mt-4">
        <Row className="flex-row">
          <LeftAside />
          <MainSection />
          <RightAside />
        </Row>
        <h2 className="mt-0 mb-2">Section title</h2>
        <Row className="flex-row mb-3 central-bottom">
          <Col lg={8} className="pb-3 border-bottom">
            <CentralCarousel />
            <CentralCard />
            <CentralCard />
            <CentralCard />
            <CentralCard />
          </Col>
          <Col lg={4} className="border-bottom">
            <LeftCard />
            <LeftCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
