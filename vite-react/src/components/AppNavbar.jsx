/* eslint-disable react/prop-types */
import { Button, Image, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import propic from '../assets/default-avatar.jpg'
import logo from '../assets/svg/simple-logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import arrow from '../assets/icons/arrow.svg'
import light from '../assets/svg/light.svg'
import dark from '../assets/svg/dark.svg'
import system from '../assets/svg/system.svg'
import { useState } from 'react'

function AppNavbar({ className }) {
  const { isAuthenticated, profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const handleToggle = (isOpen) => {
    setDropdownOpen(isOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="nav-wrap">
      <Navbar expand="lg" className={`app-navbar ${className}`}>
        <Container className="justify-content-between">
          <Navbar.Brand href="/home">
            <Image src={logo} className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className={location.pathname === '/home' ? 'active-sc' : ''}>
                Home
              </Nav.Link>
              <Nav.Link href="/trending" className={location.pathname === '/trending' ? 'active-sc' : ''}>
                Trending
              </Nav.Link>
              <Nav.Link>Discover</Nav.Link>
              <Nav.Link>Media/bias</Nav.Link>
            </Nav>
            <div className="d-flex gap-3">
              {!isAuthenticated ? (
                <>
                  <Link to={'/'}>
                    <Button className="whi-btn">Login</Button>
                  </Link>
                  <Link to={'/register'}>
                    <Button className="login-btn">Sign up</Button>
                  </Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <div className={`propic-wrap ${dropdownOpen ? 'dropdown-open' : ''}`}>
                      <Image
                        src={profile?.avatar || propic}
                        className={`propic ${dropdownOpen ? 'dropdown-open' : ''}`}
                        roundedCircle
                      />
                    </div>
                  }
                  id="basic-nav-dropdown"
                  className="first-dropdown d-none d-md-block"
                  align="end"
                  onToggle={handleToggle}
                >
                  <p className="drop-name px-2 m-0 pt-1">{profile.username}</p>
                  <p className="drop-email px-2">{profile.email}</p>

                  <Link to={'/me'}>
                    <Button className="accent-btn w-100">Profile</Button>
                  </Link>

                  <NavDropdown.Divider className="mt-3" />

                  <NavDropdown.Item>
                    <i className="bi bi-gear me-1"></i>Settings
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <div className="flex color-mode">
                    <Button className="w-100 transparent">
                      <Image src={light} className="square active-color" />
                      <span>Light</span>
                    </Button>
                    <Button className="w-100 transparent">
                      <Image src={dark} className="square" />
                      <span>Dark</span>
                    </Button>
                    <Button className="w-100 transparent">
                      <Image src={system} className="square" />
                      <span>System</span>
                    </Button>
                  </div>

                  <NavDropdown.Divider />

                  <NavDropdown.Item>Blog</NavDropdown.Item>
                  <NavDropdown.Item>About us</NavDropdown.Item>
                  <NavDropdown.Item className="flex justify-content-between">
                    Support <Image src={arrow} />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="flex justify-content-between mx-2">
                    <div className="flex drop-span">
                      <span>Privacy</span>
                      <span>Terms</span>
                      <span>Copyright</span>
                    </div>
                    <div className="flex gap-2">
                      <Link to={'https://github.com/Emanuele-P'}>
                        <i className="bi bi-github"></i>
                      </Link>
                      <Link
                        to={
                          'https://www.linkedin.com/in/emanuele-pezzato-1232a824a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgXGvQZPBTsa5rKGDFLENeg%3D%3D'
                        }
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </NavDropdown>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
