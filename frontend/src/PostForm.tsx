// PostForm.tsx
import React, { useState } from 'react';
import { Container, Heading, FormContainer, InputField, SubmitButton, ErrorText } from './PostForm.styles';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Both title and content are required');
    } else {
      setError(null);
      // Submit logic here
      console.log({ title, content });
    }
  };

  return (
    <Container>
      <Heading>Create a New Post</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default PostForm;
