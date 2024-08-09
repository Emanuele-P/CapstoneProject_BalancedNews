/* eslint-disable react/prop-types */
import { Button, Col, Spinner } from 'react-bootstrap'
import RightCard from './RightCard'
import { useRef, useState } from 'react'
import { useDynamicHeight } from '../../utils/heightUtils'

function RightAside({ mainSectionRef, validatedNews, biasPercentages }) {
  const [displayCount, setDisplayCount] = useState(10)

  const rightAsideRef = useRef(null)
  const mainSectionHeight = useDynamicHeight(mainSectionRef)

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5)
  }

  return (
    <>
      <Col
        lg={3}
        style={{ maxHeight: mainSectionHeight }}
        ref={rightAsideRef}
        className="d-flex flex-column justify-content-between"
      >
        <h6 className="m-0 pb-1 border-bottom">Latest news</h6>
        {validatedNews.length === 0 && <Spinner animation="border" />}
        {validatedNews.length > 0 && (
          <Col className="right-aside hmsc pt-0 mb-0">
            {validatedNews.slice(0, displayCount).map((article, index) => (
              <RightCard key={article.id} article={article} biasPercentages={biasPercentages[index] || {}} />
            ))}
          </Col>
        )}

        {validatedNews.length > displayCount && (
          <div>
            <Button className="w-100 more-btn mb-4" onClick={handleLoadMore}>
              Load more
            </Button>
          </div>
        )}
      </Col>
    </>
  )
}

export default RightAside
