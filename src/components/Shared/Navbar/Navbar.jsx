import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import avatarImg from '../../../assets/images/placeholder.jpg'
import logo from '../../../assets/images/logo-1.png'
import useAuth from '../../../hooks/useAuth'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import useOrganizer from '../../../hooks/useOrganizer';
import Swal from 'sweetalert2';
import LoadingSpinner from '../LoadingSpinner';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOrganizer, isLoading] = useOrganizer();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const [darkMode, setDarkMode] = useState(false);  // State to manage dark mode
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleLogOut = async () => {
    await logOut()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "logged out successfully",
      showConfirmButton: false,
      timer: 1500
    });
    handleClose()
  }

  const handleAnotherAccount = async () => {
    navigate('/signup')
    await logOut()
  }
  useEffect(() => {
    // Initially set dark mode based on localStorage or default to dark mode
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      setDarkMode(true); // Set dark mode as default
    }

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // ✅ Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  const links = <>
    <li><NavLink className="hover:bg-primary hover:text-white hover:font-bold" to='/'>Home</NavLink></li>
    <li><NavLink className="hover:bg-primary hover:text-white hover:font-bold" to='/available-camps'>Available Camps</NavLink></li>
    <li><NavLink className="hover:bg-primary hover:text-white hover:font-bold" to='/Services'>Services</NavLink></li>
    {
      user ? (
        <>
          <li><NavLink className="hover:bg-primary hover:text-white hover:font-bold" to='/contacts'>Contact Us</NavLink></li>
          <li><NavLink className="hover:bg-primary hover:text-white hover:font-bold" to='/about-us'>About Us</NavLink></li>
        </>
      ) : (

        ''
      )
    }
  </>

  return (
    <div className='fixed w-full z-10 shadow-sm '>
      <div className="navbar py-1 bg-background dark:bg-neutral-900 dark:text-primary md:px-10 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
              {
                user && isOrganizer && <Link to='/dashboard/organizer-profile'>
                  <Button variant="">Dashboard</Button>
                </Link>
              }

              {
                user && !isOrganizer && <Link to='/dashboard/participant-profile'>
                  <Button variant="">Dashboard</Button>
                </Link>
              }
            </ul>

          </div>

          <div className="">
            <Link to='/' className='flex items-center  bg-inherit'>
              <img src={logo} alt='logo' className='bg-inherit w-20 elative pb-2 hidden lg:block' />
              <h4 className='text-xl md:text-2xl font-semibold '>Medical Camp</h4>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Dark/Light Mode Toggle */}
          <div className='mr-5' whileHover={{ scale: 1.1 }}>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </div>
          {/* Conditional User Authentication */}
          {!user ? (
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
              Join Us
            </Link>
          ) : <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              {
                user && isOrganizer && <Link className='hidden md:block' to='/dashboard/organizer-profile'>
                  <Button variant="contained">Dashboard</Button>
                </Link>
              }

              {
                user && !isOrganizer && <Link className='hidden md:block' to='/dashboard/participant-profile'>
                  <Button variant="contained">Dashboard</Button>
                </Link>
              }
              <Tooltip title={`${user.displayName} Account settings`}>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 38, height: 38 }}>
                    <img src={user.photoURL} alt="" />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Link to={isOrganizer ? '/dashboard/organizer-profile' : '/dashboard/participant-profile'}>
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>
              <Link to={isOrganizer ? '/dashboard/organizer-profile' : '/dashboard/participant-profile'}>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
              </Link>

              <Divider />
              <MenuItem onClick={() => { handleClose(), handleAnotherAccount() }}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => { handleClose(), handleLogOut(); }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
