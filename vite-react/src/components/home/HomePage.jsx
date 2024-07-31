import { Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import LeftAside from './LeftAside'
import MainSection from './MainSection'
import TrendingSection from './TrendingSection'
import { useEffect, useState } from 'react'

function HomePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  return (
    <>
      <CategoriesSlider />
      <div className="border-bottom mb-3">
        <Container className="mt-4">
          <Row className="flex-row mb-3 border-bottom">
            <LeftAside />
            <MainSection />
          </Row>
          <TrendingSection title="Olympics" query="olympics" />
          {loaded && <TrendingSection title="Israel-Hamas Conflict" query="israel" />}
        </Container>
      </div>
    </>
  )
}

export default HomePage
