import { useQuery } from 'react-query';

const usePost = () => {
  return useQuery(
    'posts', 
    async () => {
      await fetch('/api/posts')
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