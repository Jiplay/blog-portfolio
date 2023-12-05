import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import ProHeader from '../../components/BookPage/book-header';
import Layout from '../../components/layout'
import markdownToHtml from '../../lib/markdownToHtml'
import { getHeroPost } from '../../lib/api';
import PostType from '../../interfaces/post';
import React, { useState } from 'react';
import { SVGs, ProModalContents } from '../../lib/constants';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  post: PostType
  preview?: boolean
}

export default function Index({ post, preview }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDataIterator, setModalDataIterator] = useState<0 | 1 | 2 | 3 | 4>(0);

  const handleRectClick = (param: 0 | 1 | 2 | 3 | 4) => () => {
    setModalDataIterator(param);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <ProHeader title={post.title} author={post.author} />
        <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-center">
        
        <div
          onClick={handleRectClick(0)}
          dangerouslySetInnerHTML={{ __html: SVGs.oxio1 }}
          className="mr-4 cursor-pointer"
        />
        <div
          onClick={handleRectClick(1)}
          dangerouslySetInnerHTML={{ __html: SVGs.oxio2 }}
          className="cursor-pointer"
        />
        <div
          onClick={handleRectClick(2)}
          dangerouslySetInnerHTML={{ __html: SVGs.concentus }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={handleRectClick(3)}
          dangerouslySetInnerHTML={{ __html: SVGs.mfl }}
          className="mr-4 cursor-pointer"
        />
        <div
          onClick={handleRectClick(4)}
          dangerouslySetInnerHTML={{ __html: SVGs.future }}
          className="cursor-pointer"
        />
      </div>
        <PostBody content={post.content} />
        <Modal show={modalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
          {ProModalContents[modalDataIterator].title !== null
          ? ProModalContents[modalDataIterator].title
          : 'Default Title'}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{ProModalContents[modalDataIterator].technical}</p>
          <br></br>
          <p>{ProModalContents[modalDataIterator].else}</p>
        
        </Modal.Body>
      </Modal>
      </Container>
    </Layout>
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
    'content',
    'tag',
  ])

  const content = await markdownToHtml(presentationPost.content || '')
  return {
    props: {
      post: {
        ...presentationPost,
        content,
      },
    },
  }
}