import { Button, Image, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import propic from '../assets/default-avatar.jpg'
import logo from '../assets/simple-logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'

function AppNavbar() {
  const { isAuthenticated, profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="justify-content-between">
        <Navbar.Brand href="/home">
          <Image src={logo} className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Discover</Nav.Link>
            <Nav.Link href="#link">Media/bias</Nav.Link>
          </Nav>
          <div className="d-flex gap-3">
            {!isAuthenticated ? (
              <>
                <Link to={'/'}>
                  <Button className="login-button">Login</Button>
                </Link>
                <Link to={'/register'}>
                  <Button className="signup-button btn-info">Sign up</Button>
                </Link>
              </>
            ) : (
              <NavDropdown
                title={<Image src={profile?.avatar || propic} className="propic" roundedCircle />}
                id="basic-nav-dropdown"
                className="first-dropdown d-none d-md-block"
                align="end"
              >
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
