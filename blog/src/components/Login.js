import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";

const Login = () => {
  const log = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
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
    const res = await axios
      .post(`http://localhost:8000/api/user/login`, {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
      sendRequest()
        // In the Login component
.then((data) => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userId", data.user._id);
  dispath(authActions.login());
})

        .then(() => naviagte("/blogs"));
    
  };


 
 
  return (
   
    
  
    
        <form  onSubmit={handleSubmit} method="post">

        <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={'center'} margin='auto' marginTop={10} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} 
              sx={{ backgroundImage:'revert',backgroundColor:'ButtonFace',":hover":{
                boxShadow:'10px 10px 20px #ccc '
              }}} >
          <Typography  variant="h2"
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
            }}>Login</Typography>
       
        <TextField sx={{color:'white'}} required name="email" onChange={handleChange} id="email" type="email" value={inputs.email} variant='outlined' placeholder='Email' margin='normal'/>
          
        <TextField name="password" required onChange={handleChange} type="password" value={inputs.password} variant='outlined' placeholder='Password'margin='normal'/>
           
         
          
        <Button type="submit" variant='contained' sx={{marginTop:'16px',background:' rgba(2,0,36,1)',borderRadius:2}}>Login</Button>

        <Typography marginTop={'15px'}>______________<Chip label="OR" />_______________</Typography>
         
         <Typography sx={{marginTop:'10px'}} > Dont't have an account?<Button component="a" href='/signup'>SignUp</Button></Typography>
          
        </Box>
           </form>
           
   
    
  );
}

export default Login;
