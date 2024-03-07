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

type Props = {
  allPosts: Post[]
  category: String
  preview?: boolean
}

export default function Index({ allPosts, category }: Props) {
  const morePosts = allPosts
  return (
    <Layout>
      <Container>
      <Header></Header>
      <Head>
        <title>{`JG-Blog`}</title>
      </Head>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {category}
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        I'll write some notes about things that I already do like intermitent fasting, I'll document 
        my thoughts and share the benefits of life not lived "by chance" but by planning.
      </p>
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
  
  
  return {
    props: {
        allPosts,
        category,
    },
  };
};

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//     'tag',
//   ], "_posts/health")

//   return {
//     props: {
//       allPosts,
//     },
//   }
// }







// import { GetServerSideProps, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
// import { getAllPosts } from '../../lib/api';

// import Post from '../../interfaces/post'
// import MoreStories from '../../components/more-stories';

// // Si vous utilisez getServerSideProps
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { category } = context.params;
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//     'tag',
//   ], `_posts/${category}`)
  
  
//   return {
//     props: {
//         allPosts,
//     },
//   };
// };

// type Props = {
//     posts: Post[]
// }

// const CategoryPage = ({ posts }: Props) => {
// const morePosts = posts
//     return (
    
//     <div className="flex items-center justify-center">
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//       </div>
        
//         );
//     };
    
//     export default CategoryPage;
    
//     {/* {posts.map((post, index) => (
//                       <div key={index}>
//                       <h2>{post.title}</h2>
//                       <p>Date: {post.date}</p>
//                       <p>Author: {post.author.name}</p>
//                       <img src={post.coverImage} alt={post.title} />
//                       <p>{post.excerpt}</p>
//                   </div>
//     ))} */}