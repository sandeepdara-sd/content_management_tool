import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Chip, TextField, Typography } from '@mui/material';



export default function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/signup", {
        username: inputs.username,
        mobile: inputs.mobile,
        email: inputs.email,
        password: inputs.password,
      });
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  function handleLogin() {
    navigate("/login");
  }


  return (
    <>
    <body>
     
    <form onSubmit={handleSubmit}>
          <Typography marginTop={'3px'}>hello</Typography>
          <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin='auto' marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} 
              sx={{backgroundColor:'ButtonFace',":hover":{
                boxShadow:'10px 10px 20px #ccc '
              }}}>
                
          <Typography variant="h2"
            noWrap
           marginBottom={2}
           marginLeft={3}
            sx={{
              mr: 2,
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>SignUp</Typography>
        
       
        <TextField required name="username" onChange={handleChange} type="Text" value={inputs.username} variant='outlined' placeholder='Name' margin='dense'/>
        <TextField required name="mobile" onChange={handleChange} type="Text" value={inputs.mobile} variant='outlined' placeholder='Mobile' margin='dense'/>
        <TextField required name="email" onChange={handleChange} type="email" value={inputs.email} variant='outlined' placeholder='Email' margin='dense'/>
          
        <TextField required name="password" onChange={handleChange} type="password" value={inputs.password} variant='outlined' placeholder='Password'margin='dense'/>
        <Button type="submit" variant='contained' sx={{marginTop:'16px', background:' rgba(2,0,36,1)',borderRadius:2}}>SignUp</Button>
            <Typography marginTop={'15px'}>______________<Chip label="OR" />_______________</Typography>
            <Typography sx={{marginTop:'10px'}} >
            Already a member? <Button component="a" href='/login'>Login</Button>
            </Typography>
           
          </Box>
          </form>
  </body>
  </>
  )
}
