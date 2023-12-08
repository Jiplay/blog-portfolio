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
      <br></br>
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgb(75,149,230)" className="bi bi-info-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
        </svg>
        <h4 className="ml-2 mt-3 ml-3 ">Click on the folders to have further informations</h4>
      </div>
      <br></br>
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