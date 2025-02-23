import { motion } from "framer-motion";
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab';
import { CheckCircleOutline, AccessAlarm, GroupAdd, FileCopy } from '@mui/icons-material';
import Heading from "../../Shared/Heading";

const steps = [
    {
        icon: <CheckCircleOutline sx={{ fontSize: 30 }} />,
        title: "Step 1: Plan the Camp",
        description: "Select the location, set up a schedule, and allocate necessary resources to organize the medical camp effectively.",
        delay: 0,
    },
    {
        icon: <AccessAlarm sx={{ fontSize: 30 }} />,
        title: "Step 2: Execute the Plan",
        description: "Ensure smooth operation by coordinating teams, setting up medical stations, and managing logistics efficiently.",
        delay: 0.2,
    },
    {
        icon: <GroupAdd sx={{ fontSize: 30 }} />,
        title: "Step 3: Provide Healthcare",
        description: "Medical professionals provide essential check-ups, treatments, and consultations for community members.",
        delay: 0.4,
    },
    {
        icon: <FileCopy sx={{ fontSize: 30 }} />,
        title: "Step 4: Post-Camp Reporting",
        description: "Generate detailed reports with key insights to evaluate the impact and improve future medical camps.",
        delay: 0.6,
    }
];

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 dark:bg-neutral-800 py-16 px-5 md:px-10">
            {/* Section Heading */}
            <Heading
                center
                title="How It Works"
                subtitle="Our platform simplifies the process of organizing and managing medical camps, ensuring a smooth, efficient experience every time."
            />

            {/* Timeline Container */}
            <div className="container mx-auto max-w-4xl mt-10">
                <Timeline position="alternate">
                    {steps.map((step, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator >
                                <TimelineDot color="primary">
                                    {step.icon}
                                </TimelineDot>
                                {index < steps.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent  >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: step.delay }}
                                >
                                    <div className="bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-lg text-center md:text-left">
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};

export default HowItWorks;
