import { Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import LeftAside from './LeftAside'
import MainSection from './MainSection'
import TrendingSection from './TrendingSection'
import { useEffect, useState } from 'react'
import DecorativeNav from '../DecorativeNav'
import AppNavbar from '../AppNavbar'
import AppFooter from '../AppFooter'

function HomePage() {
  const [loaded, setLoaded] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
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
      <AppFooter />
    </>
  )
}

export default HomePage
