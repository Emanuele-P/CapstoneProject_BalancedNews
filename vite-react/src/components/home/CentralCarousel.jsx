import { Carousel, Image } from 'react-bootstrap'
import pic from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'

function CentralCarousel() {
  return (
    <>
      <Carousel fade className="carousel mb-4">
        <Carousel.Item>
          <Link to={'/article/${id}'} className="carousel-link">
            <Image src={pic} className="w-100 c-pic" />
            <div className="hero-overlay"></div>
            <Carousel.Caption>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Numquam aliquid sint officiis et tenetur, aliquam ipsam, suscipit, ducimus reiciendis
                officia quae quo assumenda enim incidunt repudiandae consectetur facilis eaque debitis.
              </p>
              <h3>
                First slide label lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa voluptatibus
                obcaecati iusto. Culpa, facilis provident distinctio inventore dicta, qui dolorum natus unde amet,
                explicabo omnis sunt ipsam blanditiis earum.
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={'/article/${id}'} className="carousel-link">
            <Image src={pic} className="w-100 c-pic" />
            <div className="hero-overlay"></div>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={'/article/${id}'} className="carousel-link">
            <Image src={pic} className="w-100 c-pic" />
            <div className="hero-overlay"></div>
            <Carousel.Caption>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default CentralCarousel
