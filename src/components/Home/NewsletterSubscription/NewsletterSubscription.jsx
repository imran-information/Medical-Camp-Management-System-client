import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";

const NewsletterSubscription = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #0d47a1 30%, #1976d2 90%)",
                py: { xs: 8, md: 10 },
                px: { xs: 2, md: 4 },
                mb: '60px'
            }}
        >
            <Container className="" maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        textAlign: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
                        >
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 3 }}>
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
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter your email"
                            type="email"
                            required
                            sx={{
                                mb: 2,
                                backgroundColor: "#fff",
                                borderRadius: "50px",
                            }}
                        />
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
