import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function MedicalCampPromotion() {
    return (
        <motion.div
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-8 text-center rounded-3xl shadow-2xl   mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
        >
            <h2
                className="text-5xl font-bold mb-6 drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                🏥 Free Medical Camp – Your Health Matters! 🏥
            </h2>
            <motion.p
                className="text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                Join our free health check-up camp and get expert consultations from top doctors. Limited slots available – register now to secure your spot!
            </motion.p>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-full shadow-md"
                >
                    Register Now
                </Button>
            </motion.div>
        </motion.div>
    );
}