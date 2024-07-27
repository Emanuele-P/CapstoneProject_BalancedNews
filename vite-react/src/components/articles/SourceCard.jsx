/* eslint-disable react/prop-types */
import { Badge, Button, Card, CardBody, CardText, CardTitle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from '../../assets/default-avatar.jpg'
import { getTimeDifference } from '../../utils/timeUtils'

function SourceCard({ article }) {
  if (!article) {
    return null
  }
  const url = new URL(article.url)
  const domain = url.hostname.replace('www.', '').split('.')[0]

  return (
    <Card className="articles-list-card mb-2">
      <CardBody>
        <div className="flex justify-content-between top-wrapper">
          <Button className="flex justify-content-start btn-secondary">
            <Image src={pic} className="source-logo" />
            <h6>{domain || 'Unknown Source'}</h6>
          </Button>
          <div>
            <Badge className="fact-badge">Factuality</Badge>
            <Badge className="ms-2 bias-badge">Bias</Badge>
          </div>
        </div>
        <Link to={`/article/${article.id}`}>
          <CardTitle className="mt-2">{article.title || 'No title available'}</CardTitle>
          <CardText>{article.summary || 'No summary available'}</CardText>
          <div className="flex justify-content-between">
            <span>{getTimeDifference(article.publish_date)}</span>
            <Link to={article.url}>
              <span className="span-link">Read full article</span>
            </Link>
          </div>
        </Link>
      </CardBody>
    </Card>
  )
}

export default SourceCard
