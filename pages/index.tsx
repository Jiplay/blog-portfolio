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
import PostBody from "../components/post-body";
import Footer from "../components/footer";

type Props = {
  heroPost: Post
}

export default function Index({ heroPost }: Props) {
  const cards = [CSCard, CultureCard, SharingCard, TravelCard]

  return (
      <Layout footer={false}>
        <Head>
          <title>{`JG-Blog`}</title>
        </Head>
          <Container>
              <Intro title={"Julien's lab'"} description={"Musings of a Learning-Centric Developer"}/>
              <NavBar/>
              <Row style={{marginTop: "20px"}}>
                  {cards.map((CardComponent, index) => (
                      <Col>
                          <MainCard key={index} Card={CardComponent}/>
                      </Col>
                  ))}
              </Row>
              <PostBody content={heroPost.content}></PostBody>
          </Container>
        <Footer />
      </Layout>
  )
}

export const getStaticProps = async () => {

  const heroPost = getHeroPost([
    'content',
  ])
  return {
    props: {heroPost},
  }
}
