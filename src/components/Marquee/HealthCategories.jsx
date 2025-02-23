import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
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

const healthCategories = [
    {
        name: "General Check-Up",
        icon: <StethoscopeIcon fontSize="large" />,
        description: "Comprehensive health evaluations, including vitals check and preventive screenings.",
    },
    {
        name: "Dental Care",
        icon: <ToothIcon fontSize="large" />,
        description: "Routine dental check-ups, cleanings, and oral hygiene advice.",
    },
    {
        name: "Eye Care",
        icon: <EyeIcon fontSize="large" />,
        description: "Vision tests, prescriptions for glasses, and eye health assessments.",
    },
    {
        name: "Child Health",
        icon: <TeddyBearIcon fontSize="large" />,
        description: "Healthcare services focusing on pediatric wellness and immunizations.",
    },
    {
        name: "Women’s Health",
        icon: <FemaleIcon fontSize="large" />,
        description: "Specialized care for women, including gynecological health and prenatal care.",
    },
    {
        name: "Orthopedics",
        icon: <BoneIcon fontSize="large" />,
        description: "Treatment of bone and joint-related issues, such as fractures and arthritis.",
    },
    {
        name: "Cardiology",
        icon: <HeartIcon fontSize="large" />,
        description: "Heart health assessments and management of cardiovascular conditions.",
    },
    {
        name: "Diabetes Care",
        icon: <BloodDropIcon fontSize="large" />,
        description: "Diabetes screenings, management plans, and lifestyle guidance.",
    },
    {
        name: "Mental Health",
        icon: <BrainIcon fontSize="large" />,
        description: "Counseling, therapy, and support for mental and emotional well-being.",
    },
    {
        name: "Nutrition & Diet",
        icon: <SaladIcon fontSize="large" />,
        description: "Guidance on balanced diets, nutrition plans, and weight management.",
    },
];

const HealthCategories = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Grid container  >
                {healthCategories.map((category, index) => (
                    <Grid key={index}>
                        <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="ml-10 cursor-pointer dark:bg-neutral-800" sx={{
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }} variant="outlined" style={{ textAlign: "center" }}>
                            <CardContent className="w-96">
                                <div style={{ color: "#2563eb", }}>
                                    {category.icon}
                                </div>
                                <Typography className="dark:text-primary" variant="h6">{category.name}</Typography>
                                <Typography className="dark:text-gray-400" variant="h16">{category.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
};

export default HealthCategories;
