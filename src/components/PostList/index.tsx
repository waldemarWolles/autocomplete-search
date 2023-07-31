import React from 'react'
import { styled } from '@mui/material'
import { PostType } from '../../types/posts'
import Post from '../Post'
import { StyledGrid } from '../../styles'

type Props = {
  posts: PostType[]
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(({ title, body }, id) => (
        <StyledGrid item xs={12} sm={6} key={id}>
          <PostWrapper>
            <Post title={title} description={body} />
          </PostWrapper>
        </StyledGrid>
      ))}
    </>
  )
}

const PostWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})

export default PostsList
