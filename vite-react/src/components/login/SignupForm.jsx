import { Button, Form, Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/authActions'
import { useEffect, useState } from 'react'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ name, surname, username, email, password }))
  }

  useEffect(() => {
    if (user) {
      setIsRegistered(true)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  useEffect(() => {
    if (user) {
      setIsRegistered(true)
    }
  }, [user])

  return (
    <div className="background-login">
      <Container className="mb-5">
        <Row className="justify-content-center">
          {isRegistered ? (
            <Col xs={12} lg={5} className="d-flex flex-column align-items-center justify-content-center notice">
              <h4 className="mb-4">User registered correctly! A mail has been sent to your registered address.</h4>
              <Spinner animation="border" />
            </Col>
          ) : (
            <Col xs={12} lg={5}>
              <h1 className="mt-3 mb-4">Create your free account</h1>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>First name</Form.Label>
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
                      <Form.Label>Last name</Form.Label>
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
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="password">
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
                <Button type="submit" className="my-3 btn-info">
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
              <Button className="mt-3 btn-dark">
                <i className="bi bi-google me-2"></i>Continue with Google
              </Button>
              <Button className="mt-3 mb-2 btn-dark">
                <i className="bi bi-apple me-2"></i>Continue with Apple
              </Button>
              <p>
                By clicking Continue to join or sign in, you agree to Balanced News’s <span>User Agreement</span>,{' '}
                <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
              </p>
              <Link to={'/'}>
                <Button className="join-btn">Already a Subscriber? Log In</Button>
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default SignupForm
