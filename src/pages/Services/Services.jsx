import React, { useState } from "react";
import { Grid, Typography, Card, CardContent, TextField } from "@mui/material";
import StethoscopeIcon from "@mui/icons-material/MedicalServices";
import ToothIcon from "@mui/icons-material/HealthAndSafety";
import EyeIcon from "@mui/icons-material/Visibility";
import TeddyBearIcon from "@mui/icons-material/ChildFriendly";
import FemaleIcon from "@mui/icons-material/Female";
import BoneIcon from "@mui/icons-material/Accessibility";
import HeartIcon from "@mui/icons-material/Favorite";
import BloodDropIcon from "@mui/icons-material/Opacity";
import BrainIcon from "@mui/icons-material/Psychology";
import SaladIcon from "@mui/icons-material/EmojiNature";
import Heading from "../../components/Shared/Heading";
import { Helmet } from "react-helmet-async";

const services = [
    { name: "General Check-Up", icon: <StethoscopeIcon fontSize="large" />, description: "Comprehensive health evaluations to ensure overall well-being." },
    { name: "Dental Care", icon: <ToothIcon fontSize="large" />, description: "Routine dental check-ups and treatments for healthy teeth." },
    { name: "Eye Care", icon: <EyeIcon fontSize="large" />, description: "Eye examinations and treatments to preserve vision health." },
    { name: "Child Health", icon: <TeddyBearIcon fontSize="large" />, description: "Specialized pediatric care for children’s growth and wellness." },
    { name: "Women’s Health", icon: <FemaleIcon fontSize="large" />, description: "Gynecological and prenatal services for women’s health." },
    { name: "Orthopedics", icon: <BoneIcon fontSize="large" />, description: "Care for bones and joints, including fractures and arthritis." },
    { name: "Cardiology", icon: <HeartIcon fontSize="large" />, description: "Heart health assessments and cardiovascular care." },
    { name: "Diabetes Care", icon: <BloodDropIcon fontSize="large" />, description: "Management and support for diabetic patients." },
    { name: "Mental Health", icon: <BrainIcon fontSize="large" />, description: "Mental health counseling and therapy for emotional well-being." },
    { name: "Nutrition & Diet", icon: <SaladIcon fontSize="large" />, description: "Customized diet plans for a healthy and balanced lifestyle." },
];

const Services = () => {
    const [search, setSearch] = useState("");

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto" style={{ padding: "40px" }}>
            <Helmet>
                <title>Services | Medical Camp Management System</title>
            </Helmet>
            <Typography data-aos="fade-right" data-aos-duration="2000"
                variant="h3"
                align="center"
                gutterBottom
                style={{ marginBottom: "20px", fontWeight: "bold", color: "#1976d2" }}
            >
                <Heading center title={'Our Medical Services'} />
            </Typography>

            {/* Search Bar */}
            <TextField data-aos="fade-right" data-aos-duration="2000"
                label="Search Services"
                variant="outlined"
                fullWidth
                style={{ marginBottom: "40px" }}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Grid container spacing={4}>
                {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                        <Grid data-aos="flip-right" data-aos-duration="2000" item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card
                                style={{
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                    },
                                    textAlign: "center",
                                    padding: "20px",
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "10px",
                                }}
                            >
                                <CardContent >
                                    <div style={{ color: "#1976d2", marginBottom: "15px" }}>
                                        {service.icon}
                                    </div>
                                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                        {service.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ marginTop: "10px", color: "#555" }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" align="center" style={{ color: "#888" }}>
                        No services found.
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

export default Services;
