import { useQuery } from 'react-query';

const usePost = postId => {
  return useQuery(
    ['posts', postId],
    async () => {
      await fetch(`/api/posts/${postId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => console.log(data));
    }
  )
};

export default usePost;
