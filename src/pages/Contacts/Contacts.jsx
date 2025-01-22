import React from "react";
import { Grid, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const contactInfo = [
    { icon: <PhoneIcon fontSize="large" />, label: "Phone", value: "+1 (234) 567-890" },
    { icon: <EmailIcon fontSize="large" />, label: "Email", value: "info@medicalcamp.com" },
    { icon: <LocationOnIcon fontSize="large" />, label: "Address", value: "123 Main Street, City, Country" },
];

const Contacts = () => {
    return (
        <div className="container mx-auto" style={{ padding: "40px" }}>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                style={{ fontWeight: "bold", marginBottom: "40px", color: "#1976d2" }}
            >
                Contact Us
            </Typography>

            {/* Contact Info Section */}
            <Grid container spacing={4} style={{ marginBottom: "40px" }}>
                {contactInfo.map((info, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card
                            style={{
                                textAlign: "center",
                                padding: "20px",
                                border: "1px solid #e0e0e0",
                                borderRadius: "10px",
                            }}
                        >
                            <CardContent>
                                <div style={{ color: "#1976d2", marginBottom: "10px" }}>{info.icon}</div>
                                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                    {info.label}
                                </Typography>
                                <Typography variant="body1" style={{ marginTop: "5px", color: "#555" }}>
                                    {info.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Contact Form */}
            <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: "20px" }}>
                Send Us a Message
            </Typography>

            <form style={{ maxWidth: "600px", margin: "0 auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Full Name" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email Address" type="email" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Subject" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            style={{ backgroundColor: "#1976d2" }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Contacts;
