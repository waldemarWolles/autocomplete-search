import { styled, Card } from '@mui/material'

export const StyledCard = styled(Card)({
  width: '80%',
  height: '200px',
  margin: 'auto',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
  },
  cursor: 'pointer',
})
