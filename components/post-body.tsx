import React, { useEffect } from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
import ReactMarkdown from "react-markdown";
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  // useEffect(() => {
  //   hljs.highlightAll();
  // }, []);
  //
  return (
    <div className="text-white">
        <ReactMarkdown components={{
            h1: ({node, ...props}) => <h1 style={{ marginTop: '50px', marginBottom: '30px', textDecoration: "underline" }} {...props} />,
            h2: ({node, ...props}) => <h2 style={{ marginTop: '50px', marginBottom: '30px', textDecoration: "underline" }} {...props} />,
            h3: ({node, ...props}) => <h3 style={{ marginTop: '50px', marginBottom: '30px', textDecoration: "underline" }} {...props} />,
            img: ({node, ...props}) => <img alt="" style={{display: 'block', margin: '0 auto', borderRadius: "15px", maxWidth: "50%", height: "auto" }} {...props} />,
        }}>
            {content}
        </ReactMarkdown>
    </div>
  )
}

export default PostBody
