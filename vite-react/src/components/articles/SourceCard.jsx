import { Badge, Button, Card, CardBody, CardText, CardTitle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from '../../assets/default-avatar.jpg'

function SourceCard() {
  return (
    <Card className="articles-list-card mb-2">
      <CardBody>
        <div className="flex justify-content-between top-wrapper">
          <Button className="flex justify-content-start btn-secondary">
            <Image src={pic} className="source-logo" />
            <h6>Source name</h6>
          </Button>
          <div>
            <Badge className="fact-badge">Factuality</Badge>
            <Badge className="ms-2 bias-badge">Bias</Badge>
          </div>
        </div>
        <Link to={''}>
          <CardTitle className="mt-2">Title According to this specific source</CardTitle>
          <CardText>
            Incipit of the article. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda
            ducimus soluta ad cum ea esse blanditiis dolor accusantium, tempora placeat ex perspiciatis quam. Aspernatur
            optio eius fugit at saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut asperiores
            mollitia placeat dignissimos nisi molestias fugiat maiores velit reiciendis assumenda fugit debitis dolore,
            a exercitationem quidem earum cumque expedita!
          </CardText>
          <div className="flex justify-content-between">
            <span>12h ago</span>
            <span>Read full article</span>
          </div>
        </Link>
      </CardBody>
    </Card>
  )
}
export default SourceCard
