import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { GetServerSideProps } from 'next'

import Custom404 from "../404";

type Props = {
  post: PostType
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()

  if (post === null) {
    return <Custom404  />
  }

  const title = `${post.title} | JG Blog`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className="bg-white">
      <br/>
      <Layout preview={preview}>
        <Container>
          <Header />
            <>
              <article className="mb-32">
                <Head>
                  <title>{title}</title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
            </>
        </Container>
      </Layout>
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category, slug } = context.params;
  const post = getPostBySlug(slug as string, [
    'title', 
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tag'
  ], `_posts/${category}`)
  if (post !== null && post !== undefined) {

    return {
      props: {
        post: {
          ...post,
          post,
        },
      },
    }
  } else {
    return {
      props: {
        post: null
      }
    }
  }
  };
