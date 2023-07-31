import React from 'react'
import { TextField } from '@mui/material'
import { StyledGrid } from '../../styles'
import { SearchWrapper, StyledAutocomplete } from './styles'

type Props = {
  options: string[]
  optionsValue: string
  inputValue: string
  onOptionsChange: (newValue: string) => void
  onInputValueChange: (inputValue: string) => void
}

const SearchAutocompleteInput: React.FC<Props> = ({ options, inputValue, optionsValue, onOptionsChange, onInputValueChange }) => {
  return (
    <StyledGrid item xs={12}>
      <SearchWrapper>
        <StyledAutocomplete
          freeSolo
          value={optionsValue}
          onChange={(_, newValue) => {
            if (typeof newValue === 'string') {
              onOptionsChange(typeof newValue === 'string' ? newValue : '')
            }
          }}
          inputValue={inputValue}
          onInputChange={(_, newInputValue) => onInputValueChange(newInputValue)}
          options={options}
          renderInput={(params) => <TextField {...params} label="Search" margin="normal" variant="outlined" />}
        />
      </SearchWrapper>
    </StyledGrid>
  )
}

export default SearchAutocompleteInput
