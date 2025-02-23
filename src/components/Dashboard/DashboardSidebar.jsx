import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    AccountCircle,
    Brightness4,
    Brightness7,
    Notifications,
} from "@mui/icons-material";
import { FaPlusCircle, FaCreditCard } from "react-icons/fa";
import { MdOutlineCreditScore } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import useAuth from "../../hooks/useAuth.js";
import useOrganizer from "../../hooks/useOrganizer";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Swal from "sweetalert2";
import '../Dashboard/DashboardSidebar.css'
const drawerWidth = 300;


const Dashboard = () => {
    const [isOrganizer, isLoading] = useOrganizer();
    const { user, logOut } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifAnchorEl, setNotifAnchorEl] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogOut = async () => {
        await logOut();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotifOpen = (event) => {
        setNotifAnchorEl(event.currentTarget);
    };

    const handleNotifClose = () => {
        setNotifAnchorEl(null);
    };


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

    const drawer = (
        <div className="">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Medical Camp</Typography>
            </Toolbar>
            <Divider />
            <List>
                {isOrganizer ? (
                    <>
                        <ListItem component={NavLink} to="/dashboard/organizer-profile" className={({ isActive }) => (isActive ? "active" : "")}>
                            <ListItemIcon><AccountCircle /></ListItemIcon>
                            <ListItemText primary="Organizer Profile" />
                        </ListItem>
                        <ListItem component={NavLink} to="/dashboard/add-camp" className={({ isActive }) => (isActive ? "active" : "")}>
                            <ListItemIcon><FaPlusCircle /></ListItemIcon>
                            <ListItemText primary="Add Camp" />
                        </ListItem>
                        <ListItem component={NavLink} to="/dashboard/manage-camps" className={({ isActive }) => (isActive ? "active" : "")}>
                            <ListItemIcon><FaCreditCard /></ListItemIcon>
                            <ListItemText primary="Manage Camps" />
                        </ListItem>
                        <ListItem component={NavLink} to="/dashboard/manage-registered-camps" className={({ isActive }) => (isActive ? "active" : "")}>
                            <ListItemIcon><MdOutlineCreditScore /></ListItemIcon>
                            <ListItemText primary="Manage Registered Camps" />
                        </ListItem>
                    </>
                ) : (
                    <>
                        <ListItem component={NavLink} to="/dashboard/participant-profile" className={({ isActive }) => (isActive ? "active" : "")}>
                            <ListItemIcon><AccountCircle /></ListItemIcon>
                            <ListItemText primary="Participant Profile" />
                        </ListItem>
                        <ListItem component={NavLink} to="/dashboard/analytics" className={({ isActive }) => (isActive ? "active  " : "")}>
                            <ListItemIcon><IoMdAnalytics /></ListItemIcon>
                            <ListItemText primary="Analytics" />
                        </ListItem>
                    </>
                )}
            </List>
            <Divider />
            <List>
                <ListItem component={NavLink} to="/" className={({ isActive }) => (isActive ? "active " : "")}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>

        </div>
    );

    if (isLoading) return <LoadingSpinner />;

    return (
        <div style={{ display: "flex" }}>
            {/* Navbar */}
            <AppBar className=" bg-primary  dark:bg-neutral-900"
                position="fixed"
                sx={{
                    width: mobileOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
                    ml: mobileOpen ? `${drawerWidth}px` : 0,
                    transition: "width 0.3s ease, margin 0.3s ease",
                }}
            >
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
                    {/* Notifications */}
                    <IconButton color="inherit" onClick={handleNotifOpen}>
                        <Notifications />
                    </IconButton>
                    <Menu anchorEl={notifAnchorEl} open={Boolean(notifAnchorEl)} onClose={handleNotifClose}>
                        <MenuItem onClick={handleNotifClose}>No new notifications</MenuItem>
                    </Menu>
                    {/* Dark Mode */}
                    <IconButton color="inherit" onClick={() => toggleDarkMode(!darkMode)}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {/* User Avatar */}
                    <IconButton onClick={handleMenuOpen}>
                        <Avatar src={user?.photoURL || "/default-avatar.png"} />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>{user?.displayName || "User"}</MenuItem>
                        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer
                variant="persistent"
                open={mobileOpen}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        transition: "width 0.3s ease",
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Content Area */}
            <main className="dark:bg-neutral-800"
                style={{
                    flexGrow: 1,
                    padding: "20px",
                    marginTop: "64px",
                    transition: "margin-left 0.3s ease",
                    marginLeft: mobileOpen ? `${drawerWidth}px` : 0,
                }}
            >
                <div className="xl:px-10 ">

                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
