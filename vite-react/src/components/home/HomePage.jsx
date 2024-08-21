import { Container } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import MainSection from './MainSection'
import TrendingSection from './TrendingSection'
import { useEffect, useState } from 'react'
import DecorativeNav from '../DecorativeNav'
import AppNavbar from '../AppNavbar'
import AppFooter from '../AppFooter'
import TrendingPlaceholder from '../placeholders/TrendingPlaceholder'

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
    }, 3000)
    const secondTimeout = setTimeout(() => {
      setLoadedSecond(true)
    }, 4000)
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
          <MainSection scrollTop={scrollTop} />

          {!loadedFirst ? <TrendingPlaceholder /> : <TrendingSection title="Olympics" query="olympics" />}
          {!loadedSecond ? <TrendingPlaceholder /> : <TrendingSection title="Israel-Hamas Conflict" query="israel" />}
        </Container>
      </div>
      <AppFooter />
    </>
  )
}

export default HomePage
