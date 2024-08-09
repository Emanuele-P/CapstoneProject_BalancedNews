import { Col, Image, Spinner } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'
import CentralCard from './CentralCard'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getNewsSource, getTopNews } from '../../redux/actions/newsActions'
import RightAside from './RightAside'
import { extractDomain, filterUniqueDomains, filterValidArticles } from '../../utils/urlUtils'
import { calculateBiasPercentages } from '../../utils/BiasUtils'

function MainSection() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.news.loading)
  const news = useSelector((state) => state.news.news)
  const sources = useSelector((state) => state.news.newsSource)

  const mainSectionRef = useRef(null)

  const [biasPercentages, setBiasPercentages] = useState({
    leftPercentage: '0%',
    centerPercentage: '100%',
    rightPercentage: '0%',
  })

  useEffect(() => {
    if (!news || !news.top_news) {
      dispatch(getTopNews())
    }
  })

  const getValidNews = (newsArray) => {
    return newsArray.map((newsItem) => {
      return {
        ...newsItem,
        news: filterValidArticles(newsItem.news),
      }
    })
  }

  const allValidNews = news.top_news ? getValidNews(news.top_news) : []

  // console.log('Filtered valid news:', allValidNews)
  const flattenedNews = allValidNews.flatMap((newsItem) => newsItem.news[0])

  const uniqueDomains = new Set()
  useEffect(() => {
    if (allValidNews[0] && allValidNews[0].news.length > 0) {
      allValidNews[0].news.forEach((article) => {
        const domain = extractDomain(article.url)
        if (domain && !uniqueDomains.has(domain)) {
          uniqueDomains.add(domain)
          dispatch(getNewsSource(domain))
        }
      })
    }
  }, [])

  useEffect(() => {
    if (allValidNews[0] && allValidNews[0].news.length > 0) {
      const articlesForBiasCalculation = allValidNews[0].news.map((article) => {
        const domain = extractDomain(article.url)
        return { ...article, domain }
      })
      console.log('Articles for bias calculation:', articlesForBiasCalculation)

      const bias = calculateBiasPercentages(articlesForBiasCalculation, sources)
      setBiasPercentages(bias)
    }
  }, [])

  return (
    <>
      <Col lg={6} className="main-section hmsc pt-1" ref={mainSectionRef}>
        {loading && <Spinner animation="border" />}
        {!loading && flattenedNews[0] && (
          <Link to={`/article/${flattenedNews[0].id}`}>
            <section className="hero-wrapper">
              <Image src={flattenedNews[0].image || hero} className="hero"></Image>
              <div className="hero-overlay"></div>
              <h3 className="hero-title">{flattenedNews[0].title || 'Untitled'}</h3>
              <BiasBar
                leftPercentage={biasPercentages.leftPercentage}
                centerPercentage={biasPercentages.centerPercentage}
                rightPercentage={biasPercentages.rightPercentage}
              />
            </section>
          </Link>
        )}
        <h2>
          Top news stories <Spinner animation="grow" className="text-danger" />
        </h2>
        {flattenedNews &&
          flattenedNews.slice(1, 7).map((article) => <CentralCard key={article.id} article={article} />)}
      </Col>
      <RightAside mainSectionRef={mainSectionRef} validatedNews={flattenedNews} completeNews={allValidNews} />
    </>
  )
}

export default MainSection
