import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import  Radio  from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useState } from 'react'


function FormRegistro() {
  const [data, setData] = useState({name:'', breed:'', age:''})

  const handleSubmit = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga

    e.preventDefault();
    console.log(data)
  }

  const handleChangeName = (e) =>{
    setData({
      ...data,
      name: e.target.value
    })
    //console.log(data)
  }


  const handleChangeBreed = (e) =>{
    setData({
      ...data,
      breed: e.target.value
    })
    //console.log(data)
  }
  const handleChangeAge = (e) =>{
    setData({
      ...data,
      age: e.target.value
    })
    //console.log(data)
  }

  return(
    <Container>
      <Paper elevation={6} square={false} sx={{textAlign:'center'}} >
        <Typography variant='h6' color='elige el color' sx={{mt:2, mb:2}}></Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
        >
          <Grid container spacing={0}>

            <Grid size={5}
            item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                required
                label='Nombre'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeName}
              />
            </Grid>

            <Grid size={5} 
            item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                  required
                  label='Apellido'
                  variant='outlined'
                  fullWidth
                  value={data.breed}
                  onChange={handleChangeBreed}
                  
              />
            </Grid> 
            <Grid size={2}
            item xs={12} sm={6} md={4} lg={3}>
              <TextField 
                  required
                  label='edad'
                  variant='outlined'
                  fullWidth
                  value={data.age}
                  onChange={handleChangeAge}
                  
              />
            </Grid>
            <Grid size={2}>
            </Grid>
              <Grid size={4}
              item xs={12} sm={6} md={4} lg={3}> 
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
          
            <Grid size={6}>
              <Button type='submit' variant='outlined' fullWidth>Registrar</Button>
            </Grid>
           
          </Grid>
        </Box>
      </Paper>
    </Container>
    
  )

}

export default FormRegistro
