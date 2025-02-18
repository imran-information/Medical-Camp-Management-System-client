import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'; // Material UI Timeline
import { CheckCircleOutline, AccessAlarm, GroupAdd, FileCopy } from '@mui/icons-material'; // Updated icons

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
            {/* Section Header */}
            <div className="container mx-auto text-center max-w-3xl">
                <motion.h2
                    className="text-4xl font-semibold text-primary mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    How It Works
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Our platform simplifies the process of organizing and managing medical camps, ensuring a smooth, efficient experience every time.
                </motion.p>
            </div>

            {/* Timeline Section */}
            <div className="container mx-auto">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <CheckCircleOutline sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-center text-lg font-semibold text-gray-800">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-xl mb-2">Step 1: Plan the Camp</h3>
                                <p className="text-gray-600">Start by selecting the location, setting up a schedule, and allocating the necessary resources for your medical camp.</p>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <AccessAlarm sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-center text-lg font-semibold text-gray-800">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl mb-2">Step 2: Execute the Plan</h3>
                                <p className="text-gray-600">Once everything is set, the team will execute the plan, ensuring the camp runs smoothly and on time.</p>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <GroupAdd sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-center text-lg font-semibold text-gray-800">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl mb-2">Step 3: Provide Healthcare</h3>
                                <p className="text-gray-600">Healthcare professionals provide the necessary check-ups, treatments, and consultations for individuals in the community.</p>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <FileCopy sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="text-center text-lg font-semibold text-gray-800">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl mb-2">Step 4: Post-Camp Reporting</h3>
                                <p className="text-gray-600">After the camp, generate detailed reports with key data and insights to improve future camps and track health outcomes.</p>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>
    );
};

export default HowItWorks;
