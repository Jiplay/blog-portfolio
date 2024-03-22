import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPosts, getHeroPost, getAllCategoriesPosts, getLatestPost} from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PostPreview from "../components/post-preview";
import PostPreviewTextless from "../components/post-preview-textless";


type Props = {
  allPosts: Post[]
  latestPost: Post
  presentationPost: Post
}

export default function Index({ allPosts, latestPost, presentationPost }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro title={"JG Blog"} description={"Musings of a Learning-Centric Developer"} />
          <Row>
            <Col sm={8}>
              <PostPreview
                  key={latestPost.slug}
                  title={latestPost.title}
                  coverImage={latestPost.coverImage}
                  date={latestPost.date}
                  author={latestPost.author}
                  slug={latestPost.slug}
                  excerpt={latestPost.excerpt}
                  tag={latestPost.tag}
              />

            </Col>
            <Col sm={4}>
              <PostPreviewTextless
                  key={presentationPost.slug}
                  title={presentationPost.title}
                  coverImage={presentationPost.coverImage}
                  date={presentationPost.date}
                  author={presentationPost.author}
                  slug={presentationPost.slug}
                  excerpt={presentationPost.excerpt}
                  tag={presentationPost.tag}
              />
            </Col>
          </Row>
          <Row>
            {allPosts.map((post, index) => (
                <Col key={index}>
                  <PostPreviewTextless
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      author={post.author}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      tag={post.tag}
                  />
                </Col>
            ))}
          </Row>
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

  const latestPost = getLatestPost(["books", "curious", "health", "projects"])

  return {
    props: { latestPost, allPosts, presentationPost },
  }
}
