import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function SideNavbar() {
    const { user, logOut } = useAuth();
    const [anchorElNotifications, setAnchorElNotifications] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);  // State to manage dark mode

    const notifications = [
        { id: 1, text: 'New camp has been added!', time: '2 minutes ago' },
        { id: 2, text: 'Payment successful for your camp registration.', time: '30 minutes ago' },
        { id: 3, text: 'New participant has joined your camp.', time: '1 hour ago' },
        { id: 4, text: 'New camp has been added!', time: '2 minutes ago' },
        { id: 5, text: 'Payment successful for your camp registration.', time: '30 minutes ago' },
        { id: 6, text: 'New participant has joined your camp.', time: '1 hour ago' },
    ];

    const handleOpenNotifications = (event) => {
        setAnchorElNotifications(event.currentTarget);
    };

    const handleCloseNotifications = () => {
        setAnchorElNotifications(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = async () => {
        await logOut()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <AppBar sx={{ backgroundColor: darkMode ? '#121212' : '#2563eb' }} position="sticky" className="mb-10">
            <Toolbar>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </motion.div>

                <Typography variant="h6" className="flex-grow font-bold">
                    Dashboard
                </Typography>

                {/* Dark/Light Mode Toggle */}
                <motion.div whileHover={{ scale: 1.1 }}>
                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </motion.div>

                {/* Notification Icon with Dropdown */}
                <motion.div whileHover={{ scale: 1.1 }}>
                    <IconButton color="inherit" onClick={handleOpenNotifications}>
                        <NotificationsIcon />
                    </IconButton>
                </motion.div>

                {/* Notification Dropdown */}
                <Menu
                    anchorEl={anchorElNotifications}
                    open={Boolean(anchorElNotifications)}
                    onClose={handleCloseNotifications}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className="px-4 py-2 font-semibold text-primary text-center">Notifications</Typography>
                    {notifications.map((notification) => (
                        <MenuItem key={notification.id}>
                            <div>
                                <p className="text-sm">{notification.text}</p>
                                <span className="text-xs text-primary">{notification.time}</span>
                            </div>
                        </MenuItem>
                    ))}
                </Menu>



                {/* User Icon with Image */}
                <motion.div whileHover={{ scale: 1.1 }}>
                    <IconButton color="inherit" onClick={handleOpenUserMenu}>
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        ) : (
                            <AccountCircle />
                        )}
                    </IconButton>
                </motion.div>

                {/* User Dropdown */}
                <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Link to='/dashboard/organizer-profile'>
                        <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={() => { handleCloseUserMenu(); handleLogOut(); }}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}