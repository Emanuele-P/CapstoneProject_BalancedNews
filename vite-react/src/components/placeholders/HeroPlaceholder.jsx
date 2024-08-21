import { Card, Placeholder } from 'react-bootstrap'
import CentralCardPlaceholder from './CentralCardPlaceholder'

function HeroPlaceholder() {
  return (
    <>
      <Placeholder
        as={Card}
        animation="glow"
        style={{
          height: '397px',
          background: '#e9e9e9',
          borderRadius: '0',
          border: '1px solid transparent',
        }}
      >
        <Card.Body className="d-flex flex-column justify-content-end p-0">
          {/* <Placeholder as={Card.Title} animation="glow" className="px-2">
          <Placeholder xs={6} />
        </Placeholder> */}
          <Placeholder as={Card.Text} animation="glow" className="px-2">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button
            xs={6}
            className="w-100"
            style={{ borderRadius: '0', background: '#676767', border: '1px solid transparent' }}
          />
        </Card.Body>
      </Placeholder>
      <h2 className="glowing-placeholder" style={{ marginBlock: '2rem 1.5rem' }}>
        <Placeholder animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </h2>
      {Array.from({ length: 6 }).map((_, index) => (
        <CentralCardPlaceholder key={index} />
      ))}
    </>
  )
}

export default HeroPlaceholder
