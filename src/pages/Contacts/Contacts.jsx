import React from "react";
import { Grid, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Heading from "../../components/Shared/Heading";
import { Helmet } from "react-helmet-async";

const contactInfo = [
    { icon: <PhoneIcon fontSize="large" />, label: "Phone", value: "+1 (234) 567-890" },
    { icon: <EmailIcon fontSize="large" />, label: "Email", value: "info@medicalcamp.com" },
    { icon: <LocationOnIcon fontSize="large" />, label: "Address", value: "123 Main Street, City, Country" },
];

const Contacts = () => {
    return (
        <div className="bg-gray-50 dark:bg-neutral-900">
            <div className="container mx-auto py-24 px-5">
                <Helmet>
                    <title>Contact Us | Medical Camp Management System</title>
                </Helmet>
                <Typography
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    variant="h3"
                    align="center"
                    gutterBottom
                    className="font-bold text-primary dark:text-blue-400 mb-10"
                >
                    <Heading center title={"Contact Us"} />
                </Typography>

                {/* Contact Info Section */}
                <Grid container spacing={4} className="mb-10">
                    {contactInfo.map((info, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={{
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                className="bg-white dark:bg-neutral-800 dark:text-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center p-5 border border-gray-300 dark:border-gray-700 rounded-lg"
                            >
                                <CardContent>
                                    <div className="text-primary mb-3">{info.icon}</div>
                                    <Typography variant="h6" className="font-semibold">
                                        {info.label}
                                    </Typography>
                                    <Typography variant="body1" className="text-gray-600 dark:text-gray-400 mt-2">
                                        {info.value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Form */}
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    variant="h4"
                    align="center"
                    className="mb-6 text-primary"
                >
                    Send Us a Message
                </Typography>

                <form
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className="max-w-lg mx-auto bg-white dark:bg-neutral-800 dark:text-gray-300 p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                required
                                className="bg-white dark:bg-neutral-700 dark:text-gray-300"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                required
                                className="bg-white dark:bg-neutral-700 dark:text-gray-300"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                className="bg-white dark:bg-neutral-700 dark:text-gray-300"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                required
                                className="bg-white dark:bg-neutral-700 dark:text-gray-300"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-lg"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
