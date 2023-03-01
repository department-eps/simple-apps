import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';

export default function MenuAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx = {{bgcolor: "#dedede"}} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2}}
              onClick={handleClick}
            >
              <MenuIcon sx = {{fontSize: 45}}/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Power-angle eqution</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "black" }}>
              Задачи
            </Typography>
            <a href="https://ee.tu-varna.bg/">
              <img src='https://ee.tu-varna.bg/wp-content/uploads/2020/03/Logo_Colour_TUV.png'
                width={250}
                height={80}
                alt="TUV Logo"
              />
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  