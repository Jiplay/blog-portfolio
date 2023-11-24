import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getHeroPost, getAllCategoriesPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
  presentationPost: Post
}

export default function Index({ allPosts, presentationPost }: Props) {
  const heroPost = presentationPost
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tag={heroPost.tag}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
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
    'tag',
  ])

  const allPosts = getAllCategoriesPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
  ])
  return {
    props: { allPosts, presentationPost },
  }
}
