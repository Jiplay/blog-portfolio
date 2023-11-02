import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  source: string; // Le contenu du fichier Markdown à afficher
}

import 'bootstrap/dist/css/bootstrap.min.css';

import Column from './Column';


const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ source }) => {
  const [markdownContent, setMarkdownContent] = useState<string>(''); // Pour stocker le contenu Markdown

  const imageStyle = {
    maxWidth: '70%',
    marginLeft: '5%',
    height: 'auto',
  };
  
  useEffect(() => {
    // Charger le contenu du fichier Markdown depuis le chemin
    fetch(source)
      .then((response) => response.text())
      .then((content) => {
        setMarkdownContent(content);
      })
      .catch((error) => {
        console.error('Erreur de chargement du fichier Markdown :', error);
      });
  }, [source]);

  return (
    <div style={{display: 'flex' }}>
      <main style={{ width: '70%', justifyContent: 'center', alignItems: 'center', maxWidth: '70%', marginLeft: '3%'}}>
      <ReactMarkdown
        components={{
          img: (props) => <img {...props} style={imageStyle} />
        }}
      >
        {markdownContent}
      </ReactMarkdown>
        </main>
      <Column />
      </div>
  );
}

export default MarkdownRenderer;
