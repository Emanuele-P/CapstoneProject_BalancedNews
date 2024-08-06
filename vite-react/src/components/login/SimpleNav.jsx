import { Container, Image, Navbar } from 'react-bootstrap'
import logo from '../../assets/svg/simple-logo.svg'
import { Link } from 'react-router-dom'

function SimpleNav() {
  return (
    <Container>
      <Navbar className="simple-navbar border-bottom">
        <Container className="justify-content-center">
          <Navbar.Brand className="m-0">
            <Link to={'/home'}>
              <Image src={logo} className="nav-logo" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}
export default SimpleNav
