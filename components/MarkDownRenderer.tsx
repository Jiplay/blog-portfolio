import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CV from './cv/CV';
import { UserProfileCV } from '@/backend/models/models';

interface MarkdownRendererProps {
  source: string; // Le contenu du fichier Markdown à afficher
}

import 'bootstrap/dist/css/bootstrap.min.css';

import Column from './Column';


const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ source }) => {
  const [markdownContent, setMarkdownContent] = useState<string>(''); // Pour stocker le contenu Markdown

  const profilePicture: UserProfileCV = {
    source:"https://media.licdn.com/dms/image/D4D03AQGH-n-0wkhM7Q/profile-displayphoto-shrink_800_800/0/1680077046046?e=2147483647&v=beta&t=L-c1zdJkbYv4-ggF_CVUKNN_HbpflL6Sfd0bu9FJTvU",
    linkedIn:"https://www.linkedin.com/in/julien-garsia/",
    github:"https://github.com/Jiplay",
    instagram:"https://www.instagram.com/jul_italiano/",
  }

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
      <CV profile={profilePicture}/>
      </div>
  );
}

export default MarkdownRenderer;
