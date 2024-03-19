import React, { useEffect } from 'react';
import markdownStyles from './markdown-styles.module.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Choisissez le style qui vous convient
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
