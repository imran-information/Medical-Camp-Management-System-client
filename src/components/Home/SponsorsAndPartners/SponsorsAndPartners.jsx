import { motion } from "framer-motion";
import { Grid, Box, Typography, Container, Paper } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import ResearchIcon from "@mui/icons-material/Book";
import VolunteerIcon from "@mui/icons-material/PeopleAlt";
import ShieldIcon from "@mui/icons-material/Shield";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import NatureIcon from "@mui/icons-material/Nature"; // Changed to NatureIcon
import Heading from "../../Shared/Heading";

const sponsors = [
    { id: 1, icon: <LocalHospitalIcon fontSize="large" />, name: "Healthcare Providers", description: "Innovative healthcare solutions for all." },
    { id: 2, icon: <LocalPharmacyIcon fontSize="large" />, name: "Pharmaceutical Companies", description: "Leading the way in pharmaceutical innovation." },
    { id: 3, icon: <ResearchIcon fontSize="large" />, name: "Medical Research Institutes", description: "Pioneering breakthroughs in medical science." },
    { id: 4, icon: <VolunteerIcon fontSize="large" />, name: "Non-Profit Organizations", description: "Improving health access globally." },
    { id: 5, icon: <ShieldIcon fontSize="large" />, name: "Health Insurers", description: "Making healthcare affordable for everyone." },
    { id: 6, icon: <BusinessIcon fontSize="large" />, name: "Corporate Sponsors", description: "Supporting the future of healthcare." },
    { id: 7, icon: <NatureIcon fontSize="large" />, name: "Environmental Partners", description: "Protecting the planet for better health outcomes." },
    { id: 8, icon: <FactoryIcon fontSize="large" />, name: "Pharmacy Partners", description: "Providing medication access to communities." },
];

const SponsorsAndPartners = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto ">
                {/* Section Header */}
                <Heading center title={" Our Trusted Sponsors & Partners"} subtitle={'Collaborating for a healthier future.'} />
                {/* Sponsors Grid */}
                <Grid className="px-5" container spacing={3} justifyContent="center">
                    {sponsors.map((sponsor, index) => (
                        <Grid item xs={12} sm={6} md={3} key={sponsor.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <Paper
                                    elevation={10}
                                    sx={{
                                        padding: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 2,
                                        backgroundColor: "#fff",
                                        transition: "transform 0.3s ease",
                                        height: '200px',
                                        position: "relative",
                                        "&:hover": {
                                            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
                                            transform: "translateY(-10px)",
                                        },
                                    }}
                                >
                                    {/* Icon and Title */}
                                    <Box
                                        sx={{
                                            background: "#2563eb",
                                            padding: "12px",
                                            borderRadius: "50%",
                                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                            marginBottom: 2,
                                            color: "white",
                                        }}
                                    >
                                        {sponsor.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                                        {sponsor.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
                                        {sponsor.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default SponsorsAndPartners;
