import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import ReactMarkdown from "react-markdown"; // Choisissez le style qui vous convient
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto">
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    </div>
  )
}

export default PostBody
