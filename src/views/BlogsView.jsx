import React from 'react'
import styled from 'styled-components';
import usePosts from 'hooks/usePosts';
import Posts from 'components/BlogPost';

const BlogSection = styled.section`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr
  };
`;


const Blog = () => {
  const posts = usePosts();

  return (
    <BlogSection>
      <Posts />
    </BlogSection>
  )
};

export default Blog;
