import { Col, Placeholder } from 'react-bootstrap'

function RightAsidePlaceholder() {
  return (
    <Col lg={3} className="d-flex flex-column justify-content-between" style={{ height: '1290px', width: '100%' }}>
      <div>
        <h6 className="m-0 pb-1 border-bottom">
          <Placeholder animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
        </h6>

        <Col className=" pt-2 mb-0">
          {Array.from({ length: 10 }).map((_, index) => (
            <Placeholder
              as="div"
              key={index}
              animation="glow"
              className="mb-3"
              style={{ background: '#e9e9e9', padding: '10px', borderRadius: '5px' }}
            >
              <Placeholder as="h6" className="mb-2" xs={7} />
              <Placeholder as="p" className="mb-1" xs={9} />
              <Placeholder as="p" className="mb-1" xs={5} />
            </Placeholder>
          ))}
        </Col>
      </div>
      <div className="mx-2">
        <Placeholder.Button
          xs={6}
          className="w-100 mb-4"
          style={{ borderRadius: '8px', background: '#676767', border: '1px solid transparent' }}
        />
      </div>
    </Col>
  )
}

export default RightAsidePlaceholder
