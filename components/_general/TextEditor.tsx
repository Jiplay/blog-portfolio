import React, { useState } from 'react';
import './TextEditor.css'; // Assurez-vous de créer ce fichier CSS

interface TextEditorProps {
  placeholderText: string; // Propriété pour le texte de l'attribut placeholder
}

const TextEditor: React.FC<TextEditorProps> = ({ placeholderText }) => {
  const [text, setText] = useState<string>(''); // État pour stocker le texte saisi

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Mettre à jour l'état avec le texte saisi
    setText(e.target.value);
    console.log(e.target.value); // Afficher le contenu dans la console
  };

  return (
    <div >
      <textarea
        className="text-editor"
        value={text}
        onChange={handleChange}
        placeholder={placeholderText} // Utiliser la prop pour définir le placeholder
      />
    </div>
  );
};

export default TextEditor;
