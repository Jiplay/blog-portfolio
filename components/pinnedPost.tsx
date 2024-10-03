import Post from '../interfaces/post'

import PostPreview from "./post-preview";

type Props = {
  posts: Post[]
}

const PinnedPosts = ({
  posts
}: Props) => {
  return (
    <section>
      {posts.map((post) => (
          <PostPreview post={post} />
      ))}
    </section>
  )
}

export default PinnedPosts
