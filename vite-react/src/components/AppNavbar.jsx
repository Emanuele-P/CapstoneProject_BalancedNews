import { Button, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import propic from '../assets/default-avatar.jpg'
import logo from '../assets/simple-logo.png'
import { Link } from 'react-router-dom'

function AppNavbar() {
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
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="d-flex gap-3">
            <Link to={'/'}>
              <Button className="login-button">Login</Button>
            </Link>
            <Link to={'/register'}>
              <Button className="signup-button btn-info">Sign up</Button>
            </Link>
            <Image src={propic} className="propic"></Image>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
