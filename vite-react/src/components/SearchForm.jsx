import { Col, Form } from 'react-bootstrap'

const SearchForm = () => {
  return (
    <Form>
      <Col className="p-0 d-none d-lg-block">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </Col>
    </Form>
  )
}

export default SearchForm
