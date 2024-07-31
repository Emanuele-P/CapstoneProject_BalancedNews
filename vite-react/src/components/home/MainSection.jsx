import { Col, Image, Spinner } from 'react-bootstrap'
import hero from '../../assets/hero.jpg'
import CentralCard from './CentralCard'
import BiasBar from '../BiasBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getTopNews } from '../../redux/actions/newsActions'
import RightAside from './RightAside'

function MainSection() {
  const leftPercentage = 'Left 33%'
  const centerPercentage = 'Center 34%'
  const rightPercentage = 'Right 33%'

  const dispatch = useDispatch()
  const { loading, news } = useSelector((state) => state.news)
  const mainSectionRef = useRef(null)

  useEffect(() => {
    if (!news || !news.top_news) {
      dispatch(getTopNews())
    }
  }, [])

  const getValidNews = (newsArray) => {
    const validArticles = []
    newsArray.forEach((newsItem) => {
      for (let article of newsItem.news) {
        if (article.author && article.image && article.title && article.summary) {
          validArticles.push(article)
          break
        }
      }
    })
    return validArticles
  }

  const allValidNews = news.top_news ? getValidNews(news.top_news) : []

  return (
    <>
      <Col lg={6} className="main-section hmsc pt-1" ref={mainSectionRef}>
        {loading && <Spinner animation="border" />}
        {!loading && news.top_news && news.top_news.length > 0 && (
          <Link to={`/article/${allValidNews[0]?.id}`}>
            <section className="hero-wrapper">
              <Image src={allValidNews[0]?.image || hero} className="hero"></Image>
              <div className="hero-overlay"></div>
              <h3 className="hero-title">{allValidNews[0]?.title || 'Untitled'}</h3>
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
        {allValidNews.slice(1, 7).map((article) => (
          <CentralCard key={article.id} article={article} />
        ))}
      </Col>
      <RightAside mainSectionRef={mainSectionRef} validatedNews={allValidNews.slice(8)} />
    </>
  )
}

export default MainSection
