import { Container } from 'react-bootstrap'
import CategoriesSlider from './CategoriesSlider'
import MainSection from './MainSection'
import { useEffect, useState } from 'react'
import DecorativeNav from '../DecorativeNav'
import AppNavbar from '../AppNavbar'
import AppFooter from '../AppFooter'

function HomePage() {
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
      <CategoriesSlider />
      <div className="border-bottom mb-3">
        <Container className="mt-4">
          <MainSection scrollTop={scrollTop} />
        </Container>
      </div>
      <AppFooter />
    </>
  )
}

export default HomePage
