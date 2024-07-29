import { Col, Image, Spinner } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'
import CentralCard from './CentralCard'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTopNews } from '../../redux/actions/newsActions'

function MainSection() {
  const leftPercentage = 'Left 33%'
  const centerPercentage = 'Center 34%'
  const rightPercentage = 'Right 33%'

  const dispatch = useDispatch()
  const { loading, news } = useSelector((state) => state.news)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    if (!news || !news.top_news || news.top_news.flatMap((n) => n.news).length < 18) {
      if (!hasFetched) {
        dispatch(getTopNews())
        setHasFetched(true)
      }
    }
  }, [dispatch, news, hasFetched])

  const getValidArticle = (newsArray) => {
    for (let article of newsArray) {
      if (article.author && article.image && article.title && article.summary) {
        return article
      }
    }
    return newsArray[0]
  }

  const heroArticle =
    news.top_news && news.top_news.length > 0 && news.top_news[0].news.length > 0
      ? getValidArticle(news.top_news[0].news)
      : null

  const selectedNews = news.top_news
    ? news.top_news.slice(1, 7).flatMap((newsItem) => {
        return getValidArticle(newsItem.news)
      })
    : []

  return (
    <Col lg={6} className="main-section hmsc pt-1">
      {loading && <Spinner animation="border" />}
      {!loading && news.top_news && news.top_news.length > 0 && (
        <Link to={`/article/${heroArticle.id}`}>
          <section className="hero-wrapper">
            <Image src={heroArticle.image || hero} className="hero"></Image>
            <div className="hero-overlay"></div>
            <h3 className="hero-title">{heroArticle.title || 'Untitled'}</h3>
            <BiasBar
              leftPercentage={leftPercentage}
              centerPercentage={centerPercentage}
              rightPercentage={rightPercentage}
            />
          </section>
        </Link>
      )}
      <h2>
        Top news stories <Spinner animation="grow" className="text-danger" />
      </h2>
      {selectedNews.map((article) => (
        <CentralCard key={article.id} article={article} />
      ))}
    </Col>
  )
}

export default MainSection
