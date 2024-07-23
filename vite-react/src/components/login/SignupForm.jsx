import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (
    <div className="background-login">
      <Container className="mb-5">
        <Row>
          <Col xs={12} md={4} lg={7} className="mb-5 d-flex align-items-center  img-col">
            <Image className="img-fluid  img-col" />
          </Col>

          <Col xs={12} md={12} lg={5}>
            <h1 className="mt-3 mb-4">Create your free account</h1>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col lg={12}>
                  <Form.Control type="password" placeholder="Enter your password" required />
                </Col>
              </Form.Group>
              <Button type="submit" className="my-3 btn-info">
                Create Account
              </Button>
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
        </Row>
      </Container>
    </div>
  )
}

export default SignupForm
