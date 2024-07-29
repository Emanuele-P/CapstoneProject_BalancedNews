import { Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import LeftAside from './LeftAside'
import MainSection from './MainSection'
import RightAside from './RightAside'
import TrendingSection from './TrendingSection'

function HomePage() {
  return (
    <>
      <CategoriesSlider />
      <div className="border-bottom mb-3">
        <Container className="mt-4">
          <Row className="flex-row mb-3 border-bottom">
            <LeftAside />
            <MainSection />
            <RightAside />
          </Row>
          <TrendingSection title="Olympics" query="olympics" />
          <TrendingSection title="Israel-Hamas Conflict" query="israel+war" />
        </Container>
      </div>
    </>
  )
}

export default HomePage
