import { motion } from "framer-motion";
import { CheckCircle, AccessAlarm, People, FileCopy } from "@mui/icons-material"; // Updated icons for professionalism
import Heading from "../../Shared/Heading";

const KeyFeatures = () => {
    const features = [
        {
            icon: <CheckCircle sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Efficient Planning",
            text: "Our platform simplifies the complex process of organizing and scheduling medical camps, making healthcare delivery seamless."
        },
        {
            icon: <AccessAlarm sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "On-Time Execution",
            text: "We ensure that medical camps are conducted on time, optimizing the availability of resources and healthcare professionals."
        },
        {
            icon: <People sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Community Outreach",
            text: "Focused on reaching underserved communities, our solution ensures widespread healthcare access, no matter the location."
        },
        {
            icon: <FileCopy sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Actionable Insights",
            text: "Post-camp data analytics and reports that provide valuable insights, helping you assess camp performance and impact."
        }
    ];

    return (
        <section className="bg-gray-50 py-20  ">
            {/* Section Header */}
            <Heading center title={"Key Features"} subtitle={" Our solution offers a comprehensive suite of features designed to help you organize and manage medical camps more effectively."} />
            {/* Features Section */}
            <div className="container mx-auto px-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="mb-5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {feature.icon}
                        </motion.div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;
