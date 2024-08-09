import { Col, Image, Spinner } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'
import CentralCard from './CentralCard'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { getNewsSource, getTopNews } from '../../redux/actions/newsActions'
import RightAside from './RightAside'
import { extractDomain, filterValidArticles } from '../../utils/urlUtils'
import { calculateBiasPercentages } from '../../utils/BiasUtils'
import LeftAside from './LeftAside'

function MainSection() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.news.loading)
  const news = useSelector((state) => state.news.news)
  const sources = useSelector((state) => state.news.newsSource)
  const [biasPercentages, setBiasPercentages] = useState([])

  const mainSectionRef = useRef(null)

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
    for (let i = 0; i < allValidNews.length; i++) {
      if (allValidNews[i] && allValidNews[i].news.length > 0) {
        for (const article of allValidNews[i].news) {
          const domain = extractDomain(article.url)
          if (domain && !uniqueDomains.has(domain)) {
            uniqueDomains.add(domain)
            dispatch(getNewsSource(domain))
          }
        }
      }
    }
  }, [])

  useEffect(() => {
    const biases = []
    for (let i = 0; i < allValidNews.length; i++) {
      if (allValidNews[i] && allValidNews[i].news.length > 0) {
        const articlesForBiasCalculation = allValidNews[i].news.map((article) => {
          const domain = extractDomain(article.url)
          return { ...article, domain }
        })

        const bias = calculateBiasPercentages(articlesForBiasCalculation, sources)
        biases.push(bias)
      }
    }
    setBiasPercentages(biases)
  }, [])

  return (
    <>
      <LeftAside />
      <Col lg={6} className="main-section hmsc pt-1" ref={mainSectionRef}>
        {loading && <Spinner animation="border" />}
        {!loading && flattenedNews[0] && (
          <Link to={`/article/${flattenedNews[0].id}`}>
            <section className="hero-wrapper">
              <Image src={flattenedNews[0].image || hero} className="hero"></Image>
              <div className="hero-overlay"></div>
              <h3 className="hero-title">{flattenedNews[0].title || 'Untitled'}</h3>
              <BiasBar
                leftPercentage={biasPercentages[0]?.leftPercentage || '0%'}
                centerPercentage={biasPercentages[0]?.centerPercentage || '100%'}
                rightPercentage={biasPercentages[0]?.rightPercentage || '0%'}
              />
            </section>
          </Link>
        )}
        <h2>
          Top news stories <Spinner animation="grow" className="text-danger" />
        </h2>
        {flattenedNews &&
          flattenedNews
            .slice(1, 7)
            .map((article, index) => (
              <CentralCard key={article.id} article={article} biasPercentages={biasPercentages[index + 1] || {}} />
            ))}
      </Col>
      <RightAside
        mainSectionRef={mainSectionRef}
        validatedNews={flattenedNews.slice(7)}
        biasPercentages={biasPercentages.slice(7)}
      />
    </>
  )
}

export default MainSection
