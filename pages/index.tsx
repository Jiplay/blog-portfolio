import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getHeroPost, getAllCategoriesPosts, getLatestPost, getCategoryPost} from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "../components/navBar";
import HeroPost from "../components/hero-post";
import PinnedPosts from "../components/pinnedPost";
import LatestsPosts from "../components/latestsPosts";


type Props = {
  latestPosts: Post[]
  latestPost: Post
  pinnedPosts: Post[]
}

export default function Index({ latestPosts, latestPost, pinnedPosts }: Props) {
  return (
      <Layout>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro title={"JG Blog"} description={"Musings of a Learning-Centric Developer"} />
          <NavBar></NavBar>
            <Row>
              <Col><PinnedPosts posts={pinnedPosts} /></Col>
              <Col xs={5}><HeroPost post={latestPost}></HeroPost> </Col>
              <Col><LatestsPosts posts={latestPosts} /></Col>
            </Row>
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

  let latestPosts = getLatestPost(["books", "curious", "health", "projects"])
  const latestPost = latestPosts[0]
  latestPosts = latestPosts.slice(1)
  return {
    props: { latestPost, latestPosts, pinnedPosts },
  }
}
