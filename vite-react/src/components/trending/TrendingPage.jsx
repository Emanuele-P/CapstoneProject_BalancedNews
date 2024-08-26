import { useEffect, useState } from 'react'
import AppNavbar from '../AppNavbar'
import DecorativeNav from '../DecorativeNav'
import TrendingSection from './TrendingSection'
import CategoriesSlider from '../home/CategoriesSlider'
import AppFooter from '../AppFooter'
import TrendingPlaceholder from '../placeholders/TrendingPlaceholder'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function TrendingPage() {
  const [loadedFirst, setLoadedFirst] = useState(false)
  const [loadedSecond, setLoadedSecond] = useState(false)
  const [loadedThird, setLoadedThird] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const loading = useSelector((state) => state.news.loading)

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
    const thirdTimeout = setTimeout(() => {
      setLoadedThird(true)
    }, 3000)
    return () => {
      clearTimeout(firstTimeout)
      clearTimeout(secondTimeout)
      clearTimeout(thirdTimeout)
    }
  }, [])

  return (
    <>
      <DecorativeNav />
      <AppNavbar className={scrollTop > 0 ? 'scrolled' : ''} />
      <CategoriesSlider />
      <div className="border-bottom mb-3 trend">
        <Container className="mt-4">
          {loadedFirst && !loading ? (
            <TrendingSection title="Olympics" query="olympics" scrollTop={scrollTop} />
          ) : (
            <TrendingPlaceholder />
          )}
          {loadedSecond && !loading ? (
            <TrendingSection title="Israel-Hamas Conflict" query="israel" scrollTop={scrollTop} />
          ) : (
            <TrendingPlaceholder />
          )}
          {loadedThird && !loading ? (
            <TrendingSection title="European Politics" query="europe+politics" scrollTop={scrollTop} />
          ) : (
            <TrendingPlaceholder />
          )}
        </Container>
      </div>
      <AppFooter />
    </>
  )
}

export default TrendingPage
