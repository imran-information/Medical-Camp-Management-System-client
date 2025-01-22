import React from "react";
import { Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import MissionIcon from "@mui/icons-material/Lightbulb";
import VisionIcon from "@mui/icons-material/Visibility";
import TeamIcon from "@mui/icons-material/People";

const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Chief Medical Officer", image: "/images/sarah.jpg" },
    { name: "John Doe", role: "Program Coordinator", image: "/images/john.jpg" },
    { name: "Jane Smith", role: "Healthcare Specialist", image: "/images/jane.jpg" },
];

const AboutUs = () => {
    return (
        <div className="container mx-auto" style={{ padding: "40px" }}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                style={{ fontWeight: "bold", marginBottom: "40px", color: "#1976d2" }}
            >
                About Us
            </Typography>

            {/* Mission and Vision Section */}
            <Grid container spacing={4} style={{ marginBottom: "40px" }}>
                <Grid item xs={12} sm={6}>
                    <Card style={{ padding: "20px", borderRadius: "10px" }}>
                        <CardContent>
                            <div style={{ color: "#1976d2", marginBottom: "10px" }}>
                                <MissionIcon fontSize="large" />
                            </div>
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: "10px", color: "#555" }}>
                                To provide accessible, high-quality medical services to underprivileged
                                communities, ensuring everyone has access to basic healthcare.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card style={{ padding: "20px", borderRadius: "10px" }}>
                        <CardContent>
                            <div style={{ color: "#1976d2", marginBottom: "10px" }}>
                                <VisionIcon fontSize="large" />
                            </div>
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                Our Vision
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: "10px", color: "#555" }}>
                                To become a global leader in community healthcare, empowering individuals
                                and transforming lives through medical support and education.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Meet the Team Section */}
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                style={{ marginBottom: "20px", fontWeight: "bold", color: "#1976d2" }}
            >
                Meet Our Team
            </Typography>
            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card
                            style={{
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Avatar
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    margin: "0 auto",
                                    marginBottom: "10px",
                                }}
                            />
                            <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                {member.name}
                            </Typography>
                            <Typography variant="body2" style={{ color: "#555", marginTop: "5px" }}>
                                {member.role}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AboutUs;
