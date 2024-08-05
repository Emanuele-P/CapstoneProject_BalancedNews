import { Button, Col, Container, Image, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/simple-logo.svg'
import NavDropdownComponent from './NavDropdownComponent'
import propic from '../../assets/default-avatar.jpg'
import { useSelector } from 'react-redux'

function UserPage() {
  const { isAuthenticated, profile, loading } = useSelector((state) => state.auth)

  return (
    <>
      <Container>
        <Navbar className="simple-nav border-bottom flex justify-content-between">
          <Navbar.Brand className="m-0">
            <Link to={'/home'}>
              <Image src={logo} className="nav-logo" />
            </Link>
          </Navbar.Brand>
          <div className="flex gap-4">
            <i className="bi bi-question-circle"></i>
            <i className="bi bi-gear"></i>
            <i className="bi bi-bell-fill"></i>
            <NavDropdownComponent />
          </div>
        </Navbar>
      </Container>
      <Container className="user-page">
        {isAuthenticated && !loading ? (
          <>
            <h4 className="mb-4">Your account</h4>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={2} className="ps-0">
                <Image src={profile.avatar || propic} className="propic" roundedCircle />
              </Col>
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Upload your profile photo</h6>
                <span>Profile photo guidelines</span>
              </Col>
              <Col lg={{ span: 2, offset: 4 }} className="flex">
                <Button className="login-button w-100">Upload photo</Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Name</h6>
                <span>
                  {profile.name} {profile.surname}
                </span>
              </Col>
              <Col lg={{ span: 1, offset: 7 }} className="flex">
                <Button className="login-button w-100">Edit</Button>
              </Col>
            </Row>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  )
}

export default UserPage
