import { Button, Form, Container, Row, Col, Spinner, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register, REGISTER_SUCCESS } from '../../redux/actions/authActions'
import { useEffect, useState } from 'react'
import AppFooter from '../AppFooter'
import SimpleNav from './SimpleNav'
import pic from '../../assets/svg/register-pic.jpg'
import darkPic from '../../assets/svg/register-dark.jpg'

const SignupForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, user } = useSelector((state) => state.auth)
  const [isRegistered, setIsRegistered] = useState(false)
  const theme = useSelector((state) => state.theme.theme)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ name, surname, username, email, password }))
  }

  useEffect(() => {
    if (user) {
      setIsRegistered(true)
      setTimeout(() => {
        setIsRegistered(false)
        dispatch({ type: REGISTER_SUCCESS, payload: null })
        navigate('/')
      }, 2500)
    }
  }, [user, navigate, dispatch])

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
            {isRegistered ? (
              <Col xs={12} lg={5} className="flex justify-content-center notice">
                <div className="notice-box flex flex-column justify-content-center">
                  <h4 className="mb-4 text-center">Welcome to Balanced News!</h4>
                  <h4 className="mb-4 text-center"> A mail has been sent to your registered address</h4>
                  <Spinner animation="border" />
                </div>
              </Col>
            ) : (
              <>
                <Col xs={12} lg={5}>
                  <h1 className="mt-5 mb-4">Create your free account</h1>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Label className="mb-2">First name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="surname">
                          <Form.Label className="mb-2">Last name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label className="mb-2">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className="mb-2">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label column className="mb-2">
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
                    <Button type="submit" className="mb-3 mt-4 login-btn">
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                    {error && <p className="text-danger">{error}</p>}
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
                  <Button className="mt-3 mb-3 blk-btn">
                    <i className="bi bi-apple me-2"></i>Continue with Apple
                  </Button>
                  <p>
                    By clicking Continue to join or sign in, you agree to Balanced News’s <span>User Agreement</span>,{' '}
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                  </p>
                  <Link to={'/'}>
                    <Button className="whi-btn my-3">Already a Subscriber? Log In</Button>
                  </Link>
                </Col>
                <Col lg={5} className="mt-5">
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
              </>
            )}
          </Row>
        </Container>
        <AppFooter />
      </div>
    </>
  )
}

export default SignupForm
