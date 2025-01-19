import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import avatarImg from '../../../assets/images/placeholder.jpg'
import logo from '../../../assets/images/logo.png'
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

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOrganizer, isLoading] = useOrganizer();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
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
    navigate('/login')
    await logOut()
  }
  if (isLoading) return <LoadingSpinner />

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/available-camps'>Available Camps</NavLink></li>
    <li><a>Services</a></li>
    <li>
      <details>
        <summary>Blogs</summary>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
    <li><NavLink to='/contacts'>Contact Us</NavLink></li>
  </>



  return (
    <div className='fixed w-full z-10 shadow-sm'>
      <div className="navbar bg-base-100">
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
          </div>
          <div className="">
            <Link to='/' className='flex items-center  bg-inherit'>
              <img src={logo} alt='logo' className='bg-inherit w-20 relative pb-5' />
              <h4 className='text-2xl font-semibold'>Medical Camp</h4>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Conditional User Authentication */}
          {!user ? (
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
              Join Us
            </Link>
          ) : <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              {
                user && isOrganizer && <Link to='/dashboard/organizer-profile'>
                  <Button variant="contained">Dashboard</Button>
                </Link>
              }

              {
                user && !isOrganizer && <Link to='/dashboard/participant-profile'>
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
