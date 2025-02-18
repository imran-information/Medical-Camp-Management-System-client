import { motion } from "framer-motion";
import { TrackChanges, MedicalServices, Handshake, Lightbulb } from "@mui/icons-material"; // Correct import

const AboutUs = () => {
    const cards = [
        {
            icon: <TrackChanges sx={{ fontSize: 40, color: "primary.main" }} />, // Mission Icon
            title: "Our Mission",
            text: "Bridging the gap between healthcare providers and underserved communities through seamless medical camp management."
        },
        {
            icon: <MedicalServices sx={{ fontSize: 40, color: "primary.main" }} />, // Services Icon
            title: "Our Services",
            text: "Providing end-to-end medical camp planning, staffing, logistics, and post-camp follow-ups to ensure efficient healthcare delivery."
        },
        {
            icon: <Handshake sx={{ fontSize: 40, color: "primary.main" }} />, // Impact Icon
            title: "Our Impact",
            text: "Serving thousands of people annually with free checkups, treatments, and health awareness programs to improve community well-being."
        },
        {
            icon: <Lightbulb sx={{ fontSize: 40, color: "primary.main" }} />, // Approach Icon
            title: "Our Approach",
            text: "Leveraging technology, partnerships, and data-driven decision-making to enhance medical camp efficiency and outreach."
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
            {/* Section Header */}
            <div className="container mx-auto text-center max-w-3xl">
                <motion.h2
                    className="text-5xl font-extrabold text-primary mb-5" // Primary color applied to title
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Medical Camp Management
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We provide strategic medical camp planning and execution, ensuring efficient healthcare access for communities in need.
                </motion.p>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="mb-5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {card.icon} {/* The Material UI icon here */}
                        </motion.div>
                        <h3 className="text-2xl font-semibold text-primary mb-3">{card.title}</h3> {/* Primary color applied to title */}
                        <p className="text-gray-600 text-md leading-relaxed">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
