import React from 'react'
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import usePost from 'hooks/usePost';

const Blog = () => {
  const { id } = useParams();
  const post = usePost(id);

  return (
    <section>
      <ReactMarkdown>
       # Hello, *world*!
      </ReactMarkdown>
    </section>
  )
};

export default Blog;
