import React from 'react'
import { Pagination } from '@mui/material'
import { StyledGrid } from '../../styles'
import { PaginationWrapper } from './styles'

type Props = {
  count: number
  page: number
  handlePageChange: (value: number) => void
}

const PaginationComponent: React.FC<Props> = ({ count, page, handlePageChange }) => {
  return (
    <StyledGrid item xs={12}>
      <PaginationWrapper>
        <Pagination count={count} page={page} onChange={(_, value) => handlePageChange(value)} color="primary" />
      </PaginationWrapper>
    </StyledGrid>
  )
}

export default PaginationComponent
