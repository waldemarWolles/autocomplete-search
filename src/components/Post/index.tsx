import React from 'react'
import { CardContent, Typography } from '@mui/material'
import { StyledCard } from './styles'

type Props = {
  title: string
  description: string
}

const Post: React.FC<Props> = ({ title, description }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default Post
