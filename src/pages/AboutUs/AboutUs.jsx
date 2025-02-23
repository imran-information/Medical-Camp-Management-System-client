import React from "react";
import { Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import MissionIcon from "@mui/icons-material/Lightbulb";
import VisionIcon from "@mui/icons-material/Visibility";
import Heading from "../../components/Shared/Heading";
import { Helmet } from "react-helmet-async";

const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Chief Medical Officer", image: "/images/sarah.jpg" },
    { name: "John Doe", role: "Program Coordinator", image: "/images/john.jpg" },
    { name: "Jane Smith", role: "Healthcare Specialist", image: "/images/jane.jpg" },
];

const AboutUs = () => {
    return (
        <div className="bg-gray-50 dark:bg-neutral-900 dark:text-gray-300">
            <div className="container mx-auto py-24 min-h-screen px-5">
                <Helmet>
                    <title>About Us | Medical Camp Management System</title>
                </Helmet>
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    variant="h3"
                    align="center"
                    gutterBottom
                    className="font-bold text-blue-600 dark:text-blue-400 mb-10"
                >
                    <Heading center title={"About Us"} />
                </Typography>

                {/* Mission and Vision Section */}
                <Grid data-aos="fade-left" data-aos-duration="2000" container spacing={4} className="mb-10">
                    <Grid item xs={12} sm={6}>
                        <Card className="p-5 rounded-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800 dark:text-gray-300 shadow-md border border-gray-300 dark:border-gray-700">
                            <CardContent className="text-center">
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    <MissionIcon fontSize="large" />
                                </div>
                                <Typography variant="h5" className="font-bold">
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" className="mt-3 text-gray-600 dark:text-gray-400">
                                    To provide accessible, high-quality medical services to underprivileged communities, ensuring everyone has access to basic healthcare.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="p-5 rounded-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800 dark:text-gray-300 shadow-md border border-gray-300 dark:border-gray-700">
                            <CardContent className="text-center">
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    <VisionIcon fontSize="large" />
                                </div>
                                <Typography variant="h5" className="font-bold">
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" className="mt-3 text-gray-600 dark:text-gray-400">
                                    To become a global leader in community healthcare, empowering individuals and transforming lives through medical support and education.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Meet the Team Section */}
                <Typography
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    variant="h4"
                    align="center"
                    gutterBottom
                    className="mb-6 font-bold text-blue-600 dark:text-blue-400"
                >
                    <Heading center title={"Meet Our Team"} />
                </Typography>
                <Grid container spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid data-aos="fade-right" data-aos-duration="2000" item xs={12} sm={4} key={index}>
                            <Card className="text-center p-5 rounded-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800 dark:text-gray-300 shadow-md border border-gray-300 dark:border-gray-700">
                                <Avatar
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto mb-4 border-4 border-blue-500 dark:border-blue-400"
                                />
                                <Typography variant="h6" className="font-bold">
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600 dark:text-gray-400 mt-2">
                                    {member.role}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;
