import { Badge, Button, Card, CardBody, CardText, CardTitle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from '../../assets/default-avatar.jpg'

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
        <Link to={''}>
          <CardTitle className="mt-2">{article.title || 'No title available'}</CardTitle>
          <CardText>{article.summary || 'No summary available'}</CardText>
          <div className="flex justify-content-between">
            <span>{new Date(article.publish_date).toLocaleTimeString()} ago</span>
            <span>Read full article</span>
          </div>
        </Link>
      </CardBody>
    </Card>
  )
}
export default SourceCard
