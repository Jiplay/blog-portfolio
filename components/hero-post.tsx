import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Post from '../interfaces/post'

import {Col, Row} from "react-bootstrap";

type Props = {
  post: Post
}

const HeroPost = ({
  post
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-5">
        <CoverImage title={post.title} src={post.coverImage} slug={post.slug} tag={post.tag} />
      </div>
      <Row>
        <Col>
          <div className="text-3xl text-white text-bold">
            {post.title}
          </div>
        </Col>
          <Col>
            <div style={{color: 'rgb(153, 153, 153)', marginTop: "10px"}}>
              <DateFormatter dateString={post.date} />
            </div>
          </Col>
      </Row>
        <p className={"text-white"}>
            {post.excerpt}
        </p>
    </section>
  )
}

export default HeroPost
