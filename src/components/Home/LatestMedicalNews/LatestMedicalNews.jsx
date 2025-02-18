import { motion } from "framer-motion";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";
import researchImg from '../../../assets/images/Latest-Medical/research.jpg';
import vaccination from '../../../assets/images/Latest-Medical/vaccination.avif';
import telemedicine from '../../../assets/images/Latest-Medical/telemedicine.avif';

const LatestMedicalNews = () => {
    const news = [
        {
            id: 1,
            title: "New Breakthrough in Cancer Research",
            excerpt:
                "Scientists have developed a novel technique that could revolutionize cancer treatment.",
            image: researchImg,
            date: "September 15, 2023",
        },
        {
            id: 2,
            title: "COVID-19 Vaccination Updates",
            excerpt:
                "Latest insights on vaccine efficacy and new developments in the fight against COVID-19.",
            image: vaccination,
            date: "September 10, 2023",
        },
        {
            id: 3,
            title: "Advancements in Telemedicine",
            excerpt:
                "Telemedicine is transforming healthcare delivery with innovative remote consultation methods.",
            image: telemedicine,
            date: "September 05, 2023",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
            {/* Section Header */}
            <div className="container mx-auto text-center max-w-3xl mb-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Latest Medical News & Updates
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Stay informed with the latest breakthroughs and developments in medical science.
                </motion.p>
            </div>

            {/* News Cards Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <Card className="h-full flex flex-col">
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{ height:250, objectFit: "cover" }}
                            />
                            <CardContent sx={{ flexGrow: 1, p: 2 }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Typography variant="caption" color="text.secondary">
                                    {item.date}
                                </Typography>
                                <Button
                                    size="small"
                                    color="primary"
                                    sx={{ ml: "auto", textTransform: 'none' }}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LatestMedicalNews;
