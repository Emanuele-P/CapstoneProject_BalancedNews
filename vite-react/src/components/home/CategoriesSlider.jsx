import { Button, Col, Container, Row } from 'react-bootstrap'
import SearchForm from '../SearchForm'

function CategoriesSlider() {
  return (
    <>
      <div className="categories">
        <Container className="mb-4">
          <Row className="align-items-center">
            <Col lg={9} className="d-flex gap-2">
              <Button className="whi-btn rounded-pill">Politics</Button>
              <Button className="whi-btn rounded-pill">Business</Button>
              <Button className="whi-btn rounded-pill">Tech</Button>
              <Button className="whi-btn rounded-pill">Arts</Button>
              <Button className="whi-btn rounded-pill">Science</Button>
              <Button className="whi-btn rounded-pill">Health</Button>
              <Button className="whi-btn rounded-pill">Sports</Button>
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
