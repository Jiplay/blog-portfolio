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
import MainCard from "../components/MainCard";
import {CSCard, CultureCard, SharingCard, TravelCard} from "../constant/cards";

type Props = {
  latestPosts: Post[]
  latestPost: Post
  pinnedPosts: Post[]
}

export default function Index({ latestPosts, latestPost, pinnedPosts }: Props) {
  const cards = [CSCard, CultureCard, SharingCard, TravelCard]

  return (
      <Layout footer={false}>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
        <Container>
          <Intro title={"Julien's lab'"} description={"Musings of a Learning-Centric Developer"}/>
          <NavBar/>
          <Row>
            {cards.map((CardComponent, index) => (
                <Col>
                  <MainCard key={index} Card={CardComponent}/>
                </Col>
            ))}
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
    props: {latestPost, latestPosts, pinnedPosts},
  }
}
