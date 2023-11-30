import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import ProHeader from '../../components/BookPage/book-header';
import Layout from '../../components/layout'
import markdownToHtml from '../../lib/markdownToHtml'
import { getHeroPost } from '../../lib/api';
import PostType from '../../interfaces/post';

type Props = {
  post: PostType
  preview?: boolean
}

export default function Index({ post, preview }: Props) {
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <ProHeader title={post.title} author={post.author} />
        {/* <h1>{presentationPost.}</h1> */}
        <PostBody content={post.content} />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const presentationPost = getHeroPost([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
    'tag',
  ])

  const content = await markdownToHtml(presentationPost.content || '')
  return {
    props: {
      post: {
        ...presentationPost,
        content,
      },
    },
  }
}