import Container from '../../components/container'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import {getHeroPost, getAllCategoriesPosts, getLatestPost, getCategoryPost} from '../../lib/api'
import Head from 'next/head'
import Post from '../../interfaces/post'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "../../components/navBar";
import HeroPost from "../../components/hero-post";
import PinnedPosts from "../../components/pinnedPost";
import LatestsPosts from "../../components/latestsPosts";
import PostList from "../../components/postList";
import Card from "../../components/card";


type Props = {
  posts: Post[]
  latestPost: Post
  pinnedPosts: Post[]
}

export default function Index({ posts, latestPost, pinnedPosts }: Props) {
  return (
      <Layout footer={true}>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro title={"Computer Science Room"} description={""} />
          <NavBar />
            <Row>
              <Col><PinnedPosts posts={pinnedPosts} /></Col>
              <Col xs={5}><HeroPost post={latestPost}></HeroPost> </Col>
              <Col>
                <img src={"https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Jiplay&theme=dracula"}/>
              </Col>
            </Row>
            <PostList posts={posts} />
          </Container>
      </Layout>
  )
}

export const getStaticProps = async () => {
  const pinnedPosts = getCategoryPost([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
  ], "_posts/pinned")

  const posts = getCategoryPost([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
    'themes'
  ], "_posts/projects")
  let latestPosts = getLatestPost(["projects"])
  const latestPost = latestPosts[0]
  // latestPosts = latestPosts.slice(1)
  return {
    props: { latestPost, posts, pinnedPosts },
  }
}
