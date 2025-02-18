import { motion } from "framer-motion";
import { Grid, Box, Typography, Paper, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportIcon from "@mui/icons-material/Support";
import Heading from "../../Shared/Heading";

const ContactMethodCard = ({ icon, title, detail }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
    >
        <Paper elevation={12} sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#ffffff",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            height: "100%",
            "&:hover": { transform: "translateY(-10px)" },
        }}>
            <Box sx={{
                background: "#2D87F0",
                padding: "16px",
                borderRadius: "50%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: 2,
                color: "white",
            }}>
                {icon}
            </Box>
            <Typography variant="h5" sx={{
                fontWeight: "bold",
                marginBottom: 1,
            }}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
                {detail}
            </Typography>
        </Paper>
    </motion.div>
);

const ContactSection = () => {
    return (
        <section style={{
            backgroundColor: "#f9f9f9",
            padding: "80px 0",
            position: "relative",
        }}>
            <div className="container mx-auto px-5">
                {/* Section Header */}
                <Heading center title={" Get in Touch"} subtitle={' We’re here to answer your questions and help you out. Reach out to us through any of the methods below.'} />
                {/* Contact Details Grid */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<EmailIcon fontSize="medium" />}
                            title="Email Us"
                            detail="contact@email.com"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<PhoneIcon fontSize="medium" />}
                            title="Call Us"
                            detail="+1 800 123 4567"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<LocationOnIcon fontSize="medium" />}
                            title="Visit Us"
                            detail="123 Main Street, City, Country"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<SupportIcon fontSize="medium" />}
                            title="Support"
                            detail="support@email.com"
                        />
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} sm={12} md={8}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Paper elevation={12} sx={{
                                padding: 4,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                borderRadius: 4,
                                backgroundColor: "#ffffff",
                                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                                height: "100%",
                            }}>
                                <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 3 }}>
                                    Send us a Message
                                </Typography>

                                <TextField label="Your Name" variant="outlined" fullWidth margin="normal" sx={{
                                    "& .MuiInputLabel-root": { fontSize: "1.1rem" },
                                    "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                                }} />
                                <TextField label="Your Email" variant="outlined" fullWidth margin="normal" sx={{
                                    "& .MuiInputLabel-root": { fontSize: "1.1rem" },
                                    "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                                }} />
                                <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} margin="normal" sx={{
                                    "& .MuiInputLabel-root": { fontSize: "1.1rem" },
                                    "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                                }} />

                                <Button variant="contained" color="primary" sx={{
                                    marginTop: 2,
                                    padding: "12px 24px",
                                    borderRadius: "12px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#2563eb",
                                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                                    },
                                }}>
                                    Send Message
                                </Button>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default ContactSection;
