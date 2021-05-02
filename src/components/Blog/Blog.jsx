import React from 'react'
import styled from 'styled-components';
import usePosts from 'hooks/usePosts';

const BlogSection = styled.section`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr
  };
`;

// * JSX
const Blog = () => {
  const posts = usePosts();

  return (
    <BlogSection>
hi
    </BlogSection>
  )
};

export default Blog;
