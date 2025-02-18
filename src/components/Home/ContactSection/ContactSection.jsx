import { motion } from "framer-motion";
import { Grid, Box, Typography, Paper, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportIcon from "@mui/icons-material/Support"; // Added a new icon for support

// Component for the contact method cards (Email, Phone, Location, Support)
const ContactMethodCard = ({ icon, title, detail }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
    >
        <Paper elevation={12} sx={styles.contactCard}>
            <Box sx={styles.iconBox}>
                {icon}
            </Box>
            <Typography variant="h5" sx={styles.cardTitle}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={styles.cardDetail}>
                {detail}
            </Typography>
        </Paper>
    </motion.div>
);

// Main Contact Section Component
const ContactSection = () => {
    return (
        <section style={styles.section}>
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={styles.sectionDescription}>
                        We’re here to answer your questions and help you out. Reach out to us through any of the methods below.
                    </Typography>
                </motion.div>

                {/* Contact Details Grid */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {/* Contact Methods */}
                    <Grid item xs={12} sm={6} md={3}> {/* Updated to 3 for 4 cards */}
                        <ContactMethodCard
                            icon={<EmailIcon fontSize="large" />}
                            title="Email Us"
                            detail="contact@email.com"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<PhoneIcon fontSize="large" />}
                            title="Call Us"
                            detail="+1 800 123 4567"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ContactMethodCard
                            icon={<LocationOnIcon fontSize="large" />}
                            title="Visit Us"
                            detail="123 Main Street, City, Country"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}> {/* Added the fourth card */}
                        <ContactMethodCard
                            icon={<SupportIcon fontSize="large" />}
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
                            <Paper elevation={12} sx={styles.formPaper}>
                                <Typography variant="h5" fontWeight="bold" sx={styles.formTitle}>
                                    Send us a Message
                                </Typography>

                                <TextField label="Your Name" variant="outlined" fullWidth margin="normal" sx={styles.textField} />
                                <TextField label="Your Email" variant="outlined" fullWidth margin="normal" sx={styles.textField} />
                                <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} margin="normal" sx={styles.textField} />

                                <Button variant="contained" color="primary" sx={styles.submitButton}>
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

// Styles Object
const styles = {
    section: {
        backgroundColor: "#f9f9f9",
        padding: "80px 0",
        position: "relative",
    },
    sectionDescription: {
        maxWidth: "600px",
        margin: "0 auto",
    },
    formPaper: {
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#ffffff",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        height: "100%",
    },
    formTitle: {
        marginBottom: 3,
    },
    contactCard: {
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
        "&:hover": {
            transform: "translateY(-10px)",
        },
    },
    cardTitle: {
        fontWeight: "bold",
        marginBottom: 1,
    },
    cardDetail: {
        textAlign: "center",
    },
    iconBox: {
        background: "#2D87F0",
        padding: "16px",
        borderRadius: "50%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: 2,
        color: "white",
    },
    textField: {
        "& .MuiInputLabel-root": {
            fontSize: "1.1rem",
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
        },
    },
    submitButton: {
        marginTop: 2,
        padding: "12px 24px",
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#2563eb",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        },
    },
};

export default ContactSection;
