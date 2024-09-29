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
import PostPreview from "../components/post-preview";
import PostPreviewTextless from "../components/post-preview-textless";
import Image from "next/image";
import Banner from "../components/Banner";
import NavBar from "../components/navBar";
import HeroPost from "../components/hero-post";
import PinnedPosts from "../components/pinnedPost";


type Props = {
  allPosts: Post[]
  latestPost: Post
  pinnedPosts: Post[]
}

export default function Index({ allPosts, latestPost, pinnedPosts }: Props) {
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
              <Col>3 of 3</Col>
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
    props: { latestPost, allPosts, pinnedPosts },
  }
}
