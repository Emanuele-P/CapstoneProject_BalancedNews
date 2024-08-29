import { Card, Placeholder } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function LeftAsidePlaceholder() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <Placeholder
      animation="glow"
      className="col-lg-3 mt-1 pl-as"
      style={{ height: '827px', background: 'transparent', border: '1px solid transparent' }}
    >
      <div className="d-flex flex-column justify-content-end p-0">
        <Placeholder as={Card.Title} animation="glow" className="mt-0" style={{ height: '70px' }}>
          <Placeholder xs={6} className="w-100 h-100" />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" className="" style={{ height: '40px' }}>
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={7} />
        </Placeholder>
        <div className="d-flex flex-column gap-2">
          <Placeholder
            as={Card}
            animation="glow"
            style={{
              height: '338px',
              border: '1px solid transparent',
              background: `${theme === 'light' ? '#ebebeb' : '#444444'}`,
            }}
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

          <Placeholder
            as={Card}
            animation="glow"
            style={{
              height: '338px',
              border: '1px solid transparent',
              background: `${theme === 'light' ? '#ebebeb' : '#444444'}`,
            }}
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
        </div>
      </div>
    </Placeholder>
  )
}

export default LeftAsidePlaceholder
