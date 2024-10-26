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
  pinnedPosts: Post[]
}

export default function Index({ posts, pinnedPosts }: Props) {
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
              <Col xs={5}><HeroPost post={posts[0]}></HeroPost> </Col>
              <Col>
                <img src={"https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Jiplay&theme=dracula"}/>
              </Col>
            </Row>
            <PostList posts={posts.slice((1))} />
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

  let posts = getCategoryPost([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
    'themes'
  ], "_posts/projects")
  // let latestPosts = getLatestPost(["projects"])
  // let latestPost = latestPosts[0]
  posts = posts.reverse()
  return {
    props: { posts, pinnedPosts },
  }
}
