import { styled, Autocomplete } from '@mui/material'

export const SearchWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',

  marginBottom: '20px',
})

export const StyledAutocomplete = styled(Autocomplete)({
  width: '100%',
  maxWidth: '500px',
})
