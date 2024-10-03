import Post from '../interfaces/post'
import PostPreview from "./post-preview";
import Card from "./card";

type Props = {
  posts: Post[]
}

const LatestsPosts = ({
  posts
}: Props) => {
  return (
    <>
      <section>
        {posts.map((post, it) => (
            <div style={{marginBottom: "10px"}}>
                <Card post={post} nb={it}></Card>
            </div>
        ))}
      </section>
    </>
  )
}

export default LatestsPosts
