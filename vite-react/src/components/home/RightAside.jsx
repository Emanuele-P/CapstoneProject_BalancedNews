/* eslint-disable react/prop-types */
import { Button, Col, Spinner } from 'react-bootstrap'
import RightCard from './RightCard'
import { useRef, useState } from 'react'
import { useDynamicHeight } from '../../utils/heightUtils'

function RightAside({ mainSectionRef, validatedNews }) {
  const [displayCount, setDisplayCount] = useState(10)

  const rightAsideRef = useRef(null)
  const mainSectionHeight = useDynamicHeight(mainSectionRef)

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5)
  }

  return (
    <>
      <Col lg={3}>
        <h6 className="m-0 pb-1 border-bottom">Latest news</h6>
        {validatedNews.length === 0 && <Spinner animation="border" />}
        {validatedNews.length > 0 && (
          <Col className="right-aside hmsc pt-2" style={{ maxHeight: mainSectionHeight }} ref={rightAsideRef}>
            {validatedNews.slice(0, displayCount).map((article) => (
              <RightCard key={article.id} article={article} />
            ))}
            {validatedNews.length > displayCount && (
              <Button className="mt-1 w-100 login-button" onClick={handleLoadMore}>
                Load more
              </Button>
            )}
          </Col>
        )}
      </Col>
    </>
  )
}

export default RightAside
