import { useEffect, useState } from 'react'
import { Button, Form, Container, Row, Col, Spinner, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { login, fetchProfile, clearErrors } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import AppFooter from '../AppFooter'
import SimpleNav from './SimpleNav'
import pic from '../../assets/svg/login-pic.jpg'
import darkPic from '../../assets/svg/login-dark.jpg'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)
  const theme = useSelector((state) => state.theme.theme)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error, isAuthenticated, profile } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchProfile())
    }
  }, [isAuthenticated, dispatch])

  useEffect(() => {
    if (profile) {
      setShowWelcome(true)
      setTimeout(() => {
        navigate('/home')
      }, 1200)
    }
  }, [profile, navigate])

  useEffect(() => {
    dispatch(clearErrors())
  }, [dispatch])

  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setScrollTop(scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollTop * 0.5

  return (
    <>
      <SimpleNav />
      <div className="background-login">
        <Container className="pb-5">
          <Row className="justify-content-center">
            {showWelcome ? (
              <Col xs={12} lg={5} className="flex justify-content-center notice">
                <div className="notice-box flex flex-column justify-content-center">
                  <h4 className="mb-4 diplay-1">Welcome {profile?.username}!</h4>
                  <Spinner animation="border" />
                </div>
              </Col>
            ) : (
              <>
                <Col lg={5} className="mt-5 mb-5">
                  <div className="illu-wrap">
                    <Image
                      src={theme === 'light' ? pic : darkPic}
                      style={{
                        transform: `translateY(${parallaxOffset}px)`,
                        transition: 'transform 0.1s ease-out',
                      }}
                    />
                  </div>
                </Col>
                <Col xs={12} lg={5}>
                  <h1 className="mt-5 mb-4">Log In</h1>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="password">
                      <Form.Label column sm={2}>
                        Password
                      </Form.Label>
                      <Col lg={12}>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Col>
                    </Form.Group>
                    <Button type="submit" className="my-3 login-btn">
                      {loading ? 'Logging in...' : 'Log In'}
                    </Button>
                    {error && <p className="text-danger">{error}</p>}

                    <h6>Forgot password?</h6>
                  </Form>

                  <Row className="d-flex align-items-center justify-content-center mt-3">
                    <Col xs={5}>
                      <hr />
                    </Col>
                    <Col xs={1}>
                      <p className="m-0 p-0 text-center">or</p>
                    </Col>
                    <Col xs={5}>
                      <hr />
                    </Col>
                  </Row>
                  <Button className="mt-4 blk-btn">
                    <i className="bi bi-google me-2"></i>Continue with Google
                  </Button>
                  <Button className="mt-3 mb-2 blk-btn">
                    <i className="bi bi-apple me-2"></i>Continue with Apple
                  </Button>
                  <p>
                    By clicking Continue to join or sign in, you agree to Balanced News’s <span>User Agreement</span>,{' '}
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                  </p>
                  <Link to={'/register'}>
                    <Button className="whi-btn mt-4 mb-5">New to Balanced News? Join Now</Button>
                  </Link>
                </Col>
              </>
            )}
          </Row>
        </Container>
        <AppFooter />
      </div>
    </>
  )
}

export default LoginForm
