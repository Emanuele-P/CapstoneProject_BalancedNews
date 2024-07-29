/* eslint-disable react/prop-types */
import { Carousel, Image } from 'react-bootstrap'
import pic from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'

function CentralCarousel({ news }) {
  console.log('CentralCarousel received news:', news)

  if (!Array.isArray(news) || news.length === 0) {
    console.log('No news data available')
    return null
  }
  const limitedNews = news.slice(0, 3)

  return (
    <Carousel fade className="carousel mb-4">
      {limitedNews.map((article) => (
        <Carousel.Item key={article.id}>
          <Link to={`/article/${article.id}`} className="carousel-link">
            <Image src={article.image || pic} className="w-100 c-pic" />
            <div className="hero-overlay"></div>
            <Carousel.Caption>
              <p>{article.summary}</p>
              <h3>{article.title}</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CentralCarousel
