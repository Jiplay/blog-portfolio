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
  return (
    <>
      <Layout>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro title={"JG Blog"} description={"Musings of a Learning-Centric Developer"} />
          {presentationPost && (
            <HeroPost
              title={presentationPost.title}
              coverImage={presentationPost.coverImage}
              date={presentationPost.date}
              author={presentationPost.author}
              slug={presentationPost.slug}
              excerpt={presentationPost.excerpt}
              tag={presentationPost.tag}
            />
          )}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
    props: { presentationPost, allPosts },
  }
}
