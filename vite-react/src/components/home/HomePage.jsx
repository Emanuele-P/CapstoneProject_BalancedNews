import { Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import LeftAside from './LeftAside'
import MainSection from './MainSection'
import RightAside from './RightAside'

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
      </Container>
    </>
  )
}

export default HomePage
