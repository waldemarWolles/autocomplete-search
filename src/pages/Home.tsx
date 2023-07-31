import React, { useState, useEffect, useLayoutEffect } from 'react'
import { fetchPosts } from '../api'
import { PostType } from '../types/posts'
import { Container } from '../styles'
import SearchAutocompleteInput from '../components/Search'
import PostsList from '../components/PostList'
import Pagination from '../components/Pagination'

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const [page, setPage] = useState<number>(1)
  const [searchOptionsValue, setSearchOptionsValue] = React.useState<string>('')
  const [inputValue, setInputValue] = React.useState('')

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts()
      setPosts(data)
    }
    getPosts()
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [page])

  const handlePageChange = (value: number) => {
    setPage(value)
  }

  const handleSearchOptionsChange = (value: string) => {
    setSearchOptionsValue(value)
    setInputValue(value)
  }

  const handleInputValueChange = (value: string) => {
    setInputValue(value)
  }

  if (posts === null) {
    return <div>Loading...</div>
  }

  let displayedPosts: PostType[] = posts
  if (inputValue !== '') {
    displayedPosts = displayedPosts.filter(
      (post) => typeof post.title === 'string' && post.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    )
  }

  const startIndex = (page - 1) * 10
  const endIndex = startIndex + 10
  const displayedPostsForPagination = displayedPosts.slice(startIndex, endIndex)
  const optionsForAutocompleteInput = displayedPosts.map((post) => post.title)
  const pagesCount = Math.ceil(posts.length / 10)

  return (
    <Container container spacing={2} justifyContent="center">
      <SearchAutocompleteInput
        options={optionsForAutocompleteInput}
        inputValue={inputValue}
        optionsValue={searchOptionsValue}
        onOptionsChange={handleSearchOptionsChange}
        onInputValueChange={handleInputValueChange}
      />

      <PostsList posts={displayedPostsForPagination} />

      <Pagination handlePageChange={handlePageChange} count={pagesCount} page={page} />
    </Container>
  )
}

export default HomePage
