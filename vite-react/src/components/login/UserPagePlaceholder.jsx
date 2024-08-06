import { Container, Row, Col, Placeholder, Image, Navbar } from 'react-bootstrap'
import logo from '../../assets/svg/simple-logo.svg'
import NavDropdownComponent from './NavDropdownComponent'

function UserPagePlaceholder() {
  return (
    <>
      <Container>
        <Navbar className="simple-nav border-bottom flex justify-content-between">
          <Navbar.Brand className="m-0">
            <Image src={logo} className="nav-logo" />
          </Navbar.Brand>
          <div className="flex gap-4">
            <Placeholder as="i" animation="glow">
              <Placeholder xs={1} className="bi bi-question-circle" />
            </Placeholder>
            <Placeholder as="i" animation="glow">
              <Placeholder xs={1} className="bi bi-gear" />
            </Placeholder>
            <Placeholder as="i" animation="glow">
              <Placeholder xs={1} className="bi bi-bell-fill" />
            </Placeholder>
            <NavDropdownComponent />
          </div>
        </Navbar>
      </Container>
      <Container className="user-page">
        <h4 className="mb-4">
          <Placeholder animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </h4>
        <Row className="border-bottom pb-4 mx-0 mb-4">
          <Col lg={2} className="ps-0">
            <Placeholder animation="glow">
              <Placeholder className="propic" as={Image} roundedCircle />
            </Placeholder>
          </Col>
          <Col lg={4} className="d-flex flex-column justify-content-center">
            <Placeholder as="h6" animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as="span" animation="glow">
              <Placeholder xs={8} />
            </Placeholder>
          </Col>
          <Col lg={{ span: 2, offset: 4 }} className="d-flex align-items-center">
            <Placeholder.Button variant="primary" xs={6} />
          </Col>
        </Row>
        {Array.from({ length: 5 }).map((_, index) => (
          <Row key={index} className="border-bottom pb-4 mx-0 mb-4">
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <Placeholder as="h6" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={8} />
              </Placeholder>
            </Col>
            <Col lg={{ span: 1, offset: 7 }} className="d-flex align-items-start">
              <Placeholder.Button variant="primary" xs={6} />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default UserPagePlaceholder
