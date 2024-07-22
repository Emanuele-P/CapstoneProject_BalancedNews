import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../assets/extended-logo.png'

function AppFooter() {
  return (
    <Container className="p-0 border-top p-0">
      <footer className="pt-5">
        <Row className="border-bottom">
          <Col md={5}>
            <Image src={logo} className="logo" />
          </Col>
          <Col xs={6} md={2} className="mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary li-title">Company</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  History
                </a>
              </li>
              <li className="nav-item mb-2  d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Mission
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Testimonials
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Subscribe
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Group Subscriptions
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Gift
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Free Trial
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Affiliates
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary li-title">Help</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Help Center
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  FAQ
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  For Educators/Libraries
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Media Bias Ratings
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Factuality Ratings
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Referral Code
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  News Sources
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Topics
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={4} md={2} className="mb-3 d-none d-md-block">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-body-secondary li-title">Tools</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  App
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Browser Extension
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Daily Newsletter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Blindspot
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Timelines
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="border-bottom py-2 d-flex align-items-center">
          <Col md={6}>
            <ul className="nav flex-row">
              <li className="nav-item me-4">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Donate
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Manage Cookies
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="social-link">
            <ul className="nav d-flex gap-3 justify-content-end">
              <a href="#" className="nav-link p-0 text-body-secondary ">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="nav-link p-0 text-body-secondary ">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="nav-link p-0 text-body-secondary ">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="nav-link p-0 text-body-secondary ">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="nav-link p-0 text-body-secondary ">
                <i className="bi bi-github"></i>
              </a>
            </ul>
          </Col>
        </Row>

        <div className="d-flex flex-column flex-sm-row justify-content-between mt-2 mb-4">
          <span>Balanced News © 2024</span>
        </div>
      </footer>
    </Container>
  )
}

export default AppFooter
