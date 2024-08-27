import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../assets/svg/extended-logo.svg'
import world from '../../assets/svg/world.svg'

function MiniFooter() {
  return (
    <div className="border-top footer-wrapper mini-footer">
      <Container className="px-4 p-0">
        <footer className="pt-5">
          <Image src={world} className="f-bg" />
          <Row>
            <Col lg={3}></Col>
            <Col md={5} lg={3}>
              <div className="wrap w-100">
                <Image src={logo} className="logo" />
              </div>
            </Col>
            <Col xs={6} md={2} className="mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="li-title">Company</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    History
                  </a>
                </li>
                <li className="nav-item mb-2  d-md-none">
                  <a href="#" className="nav-link">
                    Mission
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link ">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    Subscribe
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    Group Subscriptions
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    Gift
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link">
                    Free Trial
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    Affiliates
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} lg={2} className="mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link li-title">Help</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link ">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link">
                    For Educators/Libraries
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    Media Bias Ratings
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link">
                    Factuality Ratings
                  </a>
                </li>
                <li className="nav-item mb-2 d-md-none">
                  <a href="#" className="nav-link">
                    Referral Code
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link">
                    News Sources
                  </a>
                </li>
                <li className="nav-item mb-2 d-none d-md-block">
                  <a href="#" className="nav-link">
                    Topics
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={4} lg={2} className="mb-3 d-none d-md-block">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link li-title">Tools</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    App
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link ">
                    Browser Extension
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link ">
                    Daily Newsletter
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link ">
                    Blindspot
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="#" className="nav-link">
                    Timelines
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="pt-5 pb-2 flex justify-content-between">
            <Col lg={2}></Col>
            <Col lg={5} className="border-bottom pb-2 ps-0">
              <ul className="nav flex-row">
                <li className="nav-item me-4">
                  <a href="#" className="nav-link ">
                    Donate
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a href="#" className="nav-link ">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a href="#" className="nav-link ">
                    Manage Cookies
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a href="#" className="nav-link ">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="social-link">
              <ul className="nav d-flex gap-3 justify-content-end">
                <a href="#" className="nav-link ">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="nav-link ">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="nav-link ">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/emanuele-pezzato-1232a824a" className="nav-link ">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Emanuele-P" className="nav-link ">
                  <i className="bi bi-github"></i>
                </a>
              </ul>
            </Col>
            <Row className="mt-2 pb-4">
              <Col lg={3}></Col>
              <Col lg={9} className="ps-1">
                <span>Balanced News © 2024</span>
              </Col>
            </Row>
          </Row>
        </footer>
      </Container>
    </div>
  )
}

export default MiniFooter
