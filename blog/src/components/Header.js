import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from '../store';
import logo from '../images/logo.png';


const Header = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const dispatch = useDispatch();

    // Initialize isLoggedIn state from localStorage
    const isLoggedInFromStorage = localStorage.getItem('isLoggedIn') === 'true';

    // Initialize isLoggedIn state using Redux store
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const [showLoginPrompt, setShowLoginPrompt] = useState(true);


    
    useEffect(() => {
        // Check both localStorage and Redux store for isLoggedIn
        if (isLoggedIn || isLoggedInFromStorage) {
            setShowLoginPrompt(false);
        }
    }, [isLoggedIn, isLoggedInFromStorage]);

    const handleLoginClick = () => {
        setShowLoginPrompt(false);
    };

    const handleLogout = () => {
        // Clear the isLoggedIn status in localStorage
        localStorage.setItem("isLoggedIn", "false");
        // Dispatch the logout action to update the Redux store
        dispatch(authActions.logout());
    };

    return (
        <>
            <AppBar position='fixed' sx={{height:'70px', backgroundImage:"linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(166,69,252,1) 36%, rgba(142,8,8,1) 73%, rgba(0,212,255,1) 100%);"}}>
                <Toolbar>
                   {!isLoggedIn && (
                    <IconButton to='/' LinkComponent={Link}>
                    <img  src={logo} height={60}  />
                    </IconButton>
                    )}
                    {!isLoggedIn && ( <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:'sans-serif',
              fontWeight: 1000,
              fontSize:'30px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blog World
          </Typography>
          )}
          {isLoggedIn && (
          <IconButton to='/blogs' LinkComponent={Link}>
                    <img  src={logo} height={60}  />
                    </IconButton>
                    )}
                    {isLoggedIn && (
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/blogs"
                        sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily:'sans-serif',
                          fontWeight: 1000,
                          fontSize:'30px',
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        Blog World
                      </Typography>
                        )}

                    <Box sx={{ display: 'flex' }} marginLeft={"auto"}>
                        {!isLoggedIn && (
                            <>
                                <Button LinkComponent={Link} to="/login" sx={{marginLeft:'auto', background:' rgba(2,0,36,1)'}} variant='contained'  onClick={handleLoginClick}>Login</Button>
                                <Button LinkComponent={Link} to="/signup" sx={{marginLeft:'20px', background:' rgba(2,0,36,1)'}} variant='contained'  onClick={handleLoginClick}>SignUp</Button>
                            </>
                        )}
                        {isLoggedIn && 
                        <>
                            <Button LinkComponent={Link} onClick={handleLogout}  to="/" variant='contained' sx={{marginLeft:'20px',marginRight:'20px', background:' rgba(2,0,36,1)'}}>LogOut</Button>

                        </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            {isLoggedIn  && (
                <Box display="flex" justifyContent={"center"} alignItems={'center'} marginTop={"50px"} paddingTop={"30px"}>
                    <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Button variant='contained' sx={{ marginRight: '100px',color:'whitesmoke' }}>
                            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        </Button>
                        <Button variant='contained' sx={{ marginRight: '100px' }}>
                            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
                        </Button>
                        <Button variant='contained'>
                            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
                        </Button>
                    </Tabs>
                </Box>
            )}
<br></br><br></br><br></br>
                   </>
    );
}

export default Header;
