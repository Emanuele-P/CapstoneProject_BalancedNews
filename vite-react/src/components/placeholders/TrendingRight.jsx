import { Card, Placeholder } from 'react-bootstrap'

function TrendingRight() {
  return (
    <>
      <Placeholder
        as={Card}
        animation="glow"
        style={{ height: '338px', border: '1px solid transparent', background: '#ebebeb', borderRadius: '12px' }}
        className="mb-3"
      >
        <Placeholder as={Card.Img} style={{ height: '200px' }} />
        <Placeholder as={Card.Body} animation="glow">
          <div className="text-center">
            <Placeholder xs={3} /> <Placeholder xs={8} /> <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={4} /> <Placeholder xs={7} />
          </div>
          <Placeholder className="w-100 mt-3" />
        </Placeholder>
      </Placeholder>
    </>
  )
}

export default TrendingRight
