import { Button, Col, Container, Row } from 'react-bootstrap'
import SearchForm from '../SearchForm'

function CategoriesSlider() {
  return (
    <>
      <div className="categories">
        <Container className="mb-4">
          <Row className="align-items-center">
            <Col lg={9} className="d-flex gap-2">
              <Button className="btn-ct rounded-pill btn-outline-dark">Politics</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Business</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Tech</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Arts</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Science</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Health</Button>
              <Button className="btn-ct rounded-pill btn-outline-dark">Sports</Button>
            </Col>
            <Col lg={3}>
              <SearchForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CategoriesSlider
