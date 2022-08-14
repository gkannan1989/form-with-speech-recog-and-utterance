import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  const { firstName, lastName} = formValues

  

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            focused
            variant={variant}
            margin={margin}
            label='First Name'
            name='firstName'
            placeholder='Your first name'
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          focused
            variant={variant}
            margin={margin}
            fullWidth
            label='Last Name'
            name='lastName'
            placeholder='Your last name'
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        {/* <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Email'
            name='email'
            placeholder='Your email address'
            type='email'
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label='Gender'
            name='gender'
            value={gender.value}
            onChange={handleChange}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <option value=''> </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </TextField>
        </Grid> */}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          id="next"
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={false}
          color='primary'
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
