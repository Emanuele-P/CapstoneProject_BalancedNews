import { Container, Row } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import MainSection from './MainSection'
import TrendingSection from './TrendingSection'
import { useEffect, useState } from 'react'
import DecorativeNav from '../DecorativeNav'
import AppNavbar from '../AppNavbar'
import AppFooter from '../AppFooter'

function HomePage() {
  const [loadedFirst, setLoadedFirst] = useState(false)
  const [loadedSecond, setLoadedSecond] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setLoadedFirst(true)
    }, 1000)
    const secondTimeout = setTimeout(() => {
      setLoadedSecond(true)
    }, 2000)
    return () => {
      clearTimeout(firstTimeout)
      clearTimeout(secondTimeout)
    }
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
      <CategoriesSlider />
      <div className="border-bottom mb-3">
        <Container className="mt-4">
          <Row className="flex-row mb-3 border-bottom">
            <MainSection />
          </Row>
          {loadedFirst && <TrendingSection title="Olympics" query="olympics" />}
          {loadedSecond && <TrendingSection title="Israel-Hamas Conflict" query="israel" />}
        </Container>
      </div>
      <AppFooter />
    </>
  )
}

export default HomePage
