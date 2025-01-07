import { Avatar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import {Button , Menu , MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
export default function Navbar() {

  const userData = JSON.parse(localStorage.getItem("userData"))
  const navigate = useNavigate()
  console.log(userData);
  const logOut = () => {
    localStorage.removeItem("userData")
    googleLogout();
    
    navigate("/login");  
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className=" shadow-md w-full p-4 flex items-center justify-between">
      <nav>
       
        <span className=''> Hi {userData.name} </span>
      </nav>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <Avatar src={userData.picture}/> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        <MenuItem onClick={logOut} className=' text-sm inline-flex gap-1'> <Logout sx={{ height:20 }}  /> Logout</MenuItem>
      </Menu>
    </header>
  );
}
