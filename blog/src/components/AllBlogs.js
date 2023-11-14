import React from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography} from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
const AllBlogs = ({title,description,image,username , isUser}) => {
  const currentDate = new Date();

  // Extract the date, month, and year from the Date object
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });

  // Extract the day and year as before
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  console.log(title, isUser)
  return (
    <div>
       <Grid container spacing={3} justifyContent={'center'}>
            <Grid item xs={5} >
      <Card sx={{ maxWidth: 345, marginLeft: "30px", width : '60%', mt: 8 , padding: "20px" , boxShadow : "25px 15px 20px #ccc", ":hover:":{
            boxShadow : "35px 30px 20px #ccc"
          } }}>
     {isUser && (
      <Box>
        <IconButton sx={{marginLeft: '250px' , marginBottom:'0px' }} ><ModeEditIcon/></IconButton>
        <IconButton ><DeleteIcon/></IconButton>
      </Box>
     )}
          
            
      <CardHeader
      
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        
        title={title}
        subheader={`${day}   ${monthName}, ${year}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
     

    </Card>
    </Grid></Grid>
    </div>
  )
}

export default AllBlogs
