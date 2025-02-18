import { motion } from "framer-motion";
import { Box, Container, Typography, TextField, Button, Paper, Grid } from "@mui/material";
import bg from '../../../assets/images/subscription/bg.jpg';

const NewsletterSubscription = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative",
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 4 },
            }}
        >
            <Container sx={{ position: "relative", zIndex: 2 }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        textAlign: "center",
                        backgroundColor: "transparent",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: "bold", color: "white", mb: 2 }}
                        >
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: "white", mb: 3 }}>
                            Stay updated with the latest news and exclusive offers.
                        </Typography>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Add your subscription logic here.
                            alert("Subscribed successfully!");
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter your name"
                                    type="text"
                                    required
                                    sx={{
                                        mb: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "50px",
                                            color: "black", // Input text color
                                            "& fieldset": {
                                                borderColor: "white", // Default border color
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", // Border color on hover
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", // Border color when focused
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Label text color
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                    sx={{
                                        mb: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "50px",
                                            color: "black",
                                            "& fieldset": {
                                                borderColor: "white",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{
                                width: "100%",
                                py: 1.5,
                                borderRadius: "50px",
                                textTransform: "none",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                        >
                            Subscribe
                        </Button>
                    </motion.form>
                </Paper>
            </Container>
        </Box>
    );
};

export default NewsletterSubscription;
