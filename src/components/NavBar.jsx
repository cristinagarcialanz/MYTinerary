import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as LinkRouter } from "react-router-dom";
import '../styles/navBar.css';

const pages = [


  {
    id: 2,
    name: 'Cities',
    path: '/Cities',
    icon: <LocationOnIcon />
  },

];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{width: '35%', display: { xs: 'none', md: 'flex' }, justifyContent: 'start' }}>
          <LinkRouter className='LinkRouter' to={'/Home'}>
            <AirplanemodeActiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
            <Typography
              className='font-class'
              variant="h6"
              noWrap
              // component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontSize: '2rem',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              MYTinerary
            </Typography>
          </LinkRouter>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secundary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, color:"primary"
              }}
            >
              {pages.map((page) => (

                <LinkRouter className='LinkRouter' to={page.path} key={page.id} >
                  <MenuItem onClick={handleCloseNavMenu} key={page.id}>
                    <Typography textAlign="center" color='white'> {page.icon}{page.name}</Typography>
                  </MenuItem>
                </LinkRouter>

              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '65%', justifyContent: 'center' }}>
          <LinkRouter className='LinkRouter' to={'/Home'}>
          <AirplanemodeActiveIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            className='font-class'
            // component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },              
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            MYTinerary
          </Typography>
          </LinkRouter>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, width:'50%'}}>
            {pages.map((page) => (

              <LinkRouter className='LinkRouter' to={page.path} key={page.id}>
                <Button
                  className='linkNavBar'
                  onClick={handleCloseNavMenu}  
                  fontSize='30px'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.icon}{page.name}
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, width:'10%', display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Travis Howard" src="../img/logo3.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="#ffa100">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;