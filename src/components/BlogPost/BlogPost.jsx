import React from 'react'
import { useParams } from 'react-router-dom';
import usePost from 'hooks/usePost';

const Blog = () => {
  const { id } = useParams();
  const postQuery = usePost(id);

  return (
    <>
      {postQuery.isLoading ? (
        <span>Loading...</span>
      ) : postQuery.isError ? (
        postQuery.error.message
      ): (
        <div>
          <h2>{postQuery.data.title}</h2>
          <p>{postQuery.data.body}</p>
        </div>
      )
    }
    </>
  )
};

export default Blog;
