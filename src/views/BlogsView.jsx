import React from 'react'
import styled from 'styled-components';
import usePosts from 'hooks/usePosts';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
  display: grid;
  grid-auto-flow:row;
  position: relative;
  top: 150px;
  padding: 1rem 2rem; 

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  };
`;

const Post = styled.div`
  outline: solid;
`;


const Blog = () => {
  const postsQuery = usePosts();
  console.log({ postsQuery })
  return (
    <>
      <h1>Blog</h1>
      <BlogSection>
        {postsQuery.isLoading ? (
          <span>Loading...</span>
        ) : postsQuery.isError ? (
          postsQuery.error.message
        ) : (
          postsQuery.data.map(post => (
            <Post as={Link} to={`/blog/${post.id}`} key={post.id}>
              {console.log(post.id)}
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </Post>
          ))
        )}
      </BlogSection>
    </>
  )
};

export default Blog;
