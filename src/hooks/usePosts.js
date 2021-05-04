import { useQuery } from 'react-query';

let url = '/api/posts'
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8080/api/posts'
}

const getPosts = async() => {
  const data = await fetch(url)
    .then(response => {
      if (!response.ok) {
      throw new Error({ status: 'Network response was not ok' });
    }
    return response.json();
  })
  return data
}

export default function usePosts() {
  return useQuery("posts", getPosts);
}
