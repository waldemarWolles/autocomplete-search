import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const fetchPosts = async () => {
  const response = await api.get('/posts')
  return response.data
}
