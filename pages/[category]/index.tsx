import Container from '../../components/container'
import Header from '../../components/header'
import Head from 'next/head'

import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api';
import PostType from '../../interfaces/post';
import React from 'react';
import MoreStories from '../../components/more-stories';
import Post from '../../interfaces/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetServerSideProps } from 'next';
import Custom404 from "../404";

type Props = {
  allPosts: Post[]
  category: String
  preview?: boolean
}

export default function Index({ allPosts, category }: Props) {
  if (category === "error") {
      return <Custom404 />
  }
    const morePosts = allPosts
  return (
    <Layout>
      <Container>
      <Header></Header>
      <Head>
        <title>{`JG-Blog`}</title>
      </Head>
      <h2 className="mb-8 text-5xl text-white md:text-7xl font-bold tracking-tighter leading-tight">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="flex items-center justify-center">
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
      <br></br>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params;
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
  ], `_posts/${category}`)
  
  if (allPosts === undefined) {
      return {
          props: {
              allPosts: null,
              category: "error"
          }
      }
  }

  return {
    props: {
        allPosts,
        category,
    },
  };
};
