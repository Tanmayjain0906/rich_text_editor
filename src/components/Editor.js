import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Load content from localStorage when component mounts
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleContentChange = (newContent) => {
    setContent(newContent);
    // Save content to localStorage on change
    localStorage.setItem('editorContent', newContent);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default Editor;
