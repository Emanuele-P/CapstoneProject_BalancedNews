import { Container, Image } from 'react-bootstrap'
import bg from '../assets/topography.svg'

function DecorativeNav() {
  return (
    <div className="dec-wrap">
      <Container className="decoration">
        <h4>Your Gateway to a Balanced Perspective</h4>
        <Image src={bg} />
      </Container>
    </div>
  )
}
export default DecorativeNav
