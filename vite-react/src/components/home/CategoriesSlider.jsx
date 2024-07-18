import { Button, Container } from 'react-bootstrap'

function CategoriesSlider() {
  return (
    <>
      <div className="categories">
        <Container className="d-flex gap-2 mt-3">
          <Button className="btn-ct">Politics</Button>
          <Button className="btn-ct">Business</Button>
          <Button className="btn-ct">Tech</Button>
          <Button className="btn-ct">Arts</Button>
          <Button className="btn-ct">Science</Button>
          <Button className="btn-ct">Health</Button>
          <Button className="btn-ct">Sports</Button>
        </Container>
      </div>
    </>
  )
}

export default CategoriesSlider
