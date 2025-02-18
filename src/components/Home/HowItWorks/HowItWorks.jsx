import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { CheckCircleOutline, AccessAlarm, GroupAdd, FileCopy } from '@mui/icons-material';
import Heading from "../../Shared/Heading";

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
            {/* Section Header */}
            <Heading 
                center 
                title={'How It Works'} 
                subtitle={"Our platform simplifies the process of organizing and managing medical camps, ensuring a smooth, efficient experience every time."} 
            />

            {/* Timeline Section */}
            <div className="container mx-auto">
                <Timeline position="alternate">
                    {/* Step 1: Plan the Camp */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <CheckCircleOutline sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 1: Plan the Camp</h3>
                                    <p className="text-gray-600 text-lg">
                                        Start by selecting the location, setting up a schedule, and allocating the necessary resources for your medical camp.
                                    </p>
                                </div>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 2: Execute the Plan */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <AccessAlarm sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 2: Execute the Plan</h3>
                                    <p className="text-gray-600 text-lg">
                                        Once everything is set, the team will execute the plan, ensuring the camp runs smoothly and on time.
                                    </p>
                                </div>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 3: Provide Healthcare */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <GroupAdd sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 3: Provide Healthcare</h3>
                                    <p className="text-gray-600 text-lg">
                                        Healthcare professionals provide the necessary check-ups, treatments, and consultations for individuals in the community.
                                    </p>
                                </div>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Step 4: Post-Camp Reporting */}
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <FileCopy sx={{ fontSize: 30 }} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 4: Post-Camp Reporting</h3>
                                    <p className="text-gray-600 text-lg">
                                        After the camp, generate detailed reports with key data and insights to improve future camps and track health outcomes.
                                    </p>
                                </div>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>
    );
};

export default HowItWorks;
