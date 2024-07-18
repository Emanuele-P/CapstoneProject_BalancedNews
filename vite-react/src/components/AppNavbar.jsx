import { Button, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import propic from '../assets/default-avatar.jpg'

function AppNavbar() {
  return (
    <Navbar expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">News Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="test">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Discover</Nav.Link>
            <Nav.Link href="#link">Media/bias</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex gap-3">
            <Button className="signup-button btn-info">Sign up</Button>
            <Image src={propic} className="propic"></Image>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
