/* eslint-disable react/prop-types */
import { Badge, Button, Card, CardBody, CardText, CardTitle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import pic from '../../assets/svg/sourceLogo.svg'
import { getTimeDifference } from '../../utils/timeUtils'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsSource } from '../../redux/actions/newsActions'
import { extractDomain } from '../../utils/urlUtils'

function SourceCard({ article }) {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (article) {
      const domain = extractDomain(article.url)
      if (domain) {
        dispatch(getNewsSource(domain))
      }
    }
  }, [])

  const sources = useSelector((state) => state.news.newsSource)
  const domain = article ? extractDomain(article.url) : null
  const source = domain ? sources[domain] : {}

  if (!article) {
    return null
  }
  // console.log(`Domain: ${domain}`)
  // console.log(`Source: `, source)

  const url = new URL(article.url)
  const displayDomain = url.hostname.replace('www.', '').split('.')[0]

  return (
    <Card className="articles-list-card mb-3">
      <Link to={`/article/${article.id}`}>
        <CardBody>
          <div className="flex justify-content-between top-wrapper">
            <Button className="flex justify-content-start btn-source">
              <Image src={source?.logo || pic} className="source-logo" />
              <h6>{source?.name || displayDomain || 'Unknown Source'}</h6>
            </Button>
            <div>
              <Badge className="fact-badge">{isAuthenticated ? source?.factualReporting || 'High' : ''}</Badge>
              <Badge className="ms-2 bias-badge">
                {isAuthenticated ? source?.biasRating || 'Center' : <i className="bi bi-lock-fill p-0 mx-3"></i>}
              </Badge>
            </div>
          </div>
          <CardTitle className="mt-2 px-3">{article.title || 'No title available'}</CardTitle>
          <CardText className="px-3">{article.summary || 'No summary available'}</CardText>
          <div className="flex justify-content-between px-3 pb-3">
            <span>{getTimeDifference(article.publish_date)}</span>
            <Link to={article.url}>
              <span className="span-link">Read full article</span>
            </Link>
          </div>
        </CardBody>
      </Link>
    </Card>
  )
}

export default SourceCard
