import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { city } = formValues


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
           focused
            variant={variant}
            margin={margin}
            fullWidth
            label='City'
            name='city'
            placeholder='Enter your city'
            value={city.value}
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid> 
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button id="next" variant='contained' disabled={false} color='primary' onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  )
}
