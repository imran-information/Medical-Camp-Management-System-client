import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import EmergencyIcon from "@mui/icons-material/Emergency";


export default function MedicalCampPromotion() {
    return (
        <motion.div
            className="bg-primary text-white dark:bg-neutral-900 py-16 px-8 text-center  shadow-2xl   mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
        >
            <h2
                className="text-5xl font-bold mb-6 drop-shadow-lg dark:text-primary flex items-center justify-center gap-2 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <HealthAndSafetyIcon sx={{ fontSize: 32 }} />
                Free Medical Camp – Your Health Matters!
                <HealthAndSafetyIcon sx={{ fontSize: 32 }} />
            </h2>
            <motion.p
                className="text-lg mb-8 leading-relaxed dark:text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                Join our free health check-up camp and get expert consultations from top doctors. Limited slots available – register now to secure your spot!
            </motion.p>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to='/login'>
                    <Button sx={{ backgroundColor: 'white' }}
                        variant="outlined"
                        color="primary"
                        className="  hover:text-white hover:bg-primary px-8 py-3 font-semibold rounded-full shadow-md"
                    >
                        Register Now
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    );
}