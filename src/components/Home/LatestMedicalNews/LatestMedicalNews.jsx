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
import aiHealthcare from '../../../assets/images/Latest-Medical/aiHealthcare.jpg';
import mentalHealth from '../../../assets/images/Latest-Medical/mentalHealth.jpg';
import wearableTech from '../../../assets/images/Latest-Medical/wearableTech.jpg';
import Heading from "../../Shared/Heading";

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
        {
            id: 4,
            title: "AI in Healthcare: The Future of Diagnosis",
            excerpt:
                "AI is being integrated into healthcare systems to improve diagnostic accuracy and speed.",
            image: aiHealthcare,
            date: "September 20, 2023",
        },
        {
            id: 5,
            title: "Mental Health Awareness: New Initiatives",
            excerpt:
                "Programs aimed at increasing mental health awareness and support have gained traction across the globe.",
            image: mentalHealth,
            date: "September 18, 2023",
        },
        {
            id: 6,
            title: "Wearable Technology: The New Frontier in Health Monitoring",
            excerpt:
                "Wearable devices are enabling continuous health monitoring, improving patient outcomes and care.",
            image: wearableTech,
            date: "September 12, 2023",
        },
    ];


    return (
        <div className="dark:bg-neutral-800">
            <section className="container mx-auto py-20 px-6">
                {/* Section Header */}
                <Heading center title={'Latest Medical News & Updates'} subtitle={'Stay informed with the latest breakthroughs and developments in medical science.'} />

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div
                            key={item.id}
                            className="rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
                            style={{
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                            // Hover effect with scale and box-shadow
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <Card
                                className="h-full flex flex-col dark:bg-neutral-900"
                                sx={{
                                    backgroundColor: '#f9fafb',
                                }}
                            >
                                {/* Image Section */}
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        height: 250,
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.05)' },
                                    }}
                                />

                                {/* Content Section */}
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '1.125rem',
                                            color: 'primary.main',
                                            transition: 'color 0.3s ease',
                                            '&:hover': { color: 'secondary.main' },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography className="dark:text-gray-400" variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                                        {item.excerpt}
                                    </Typography>
                                </CardContent>

                                {/* Footer Section */}
                                <CardActions sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography className="dark:text-gray-400"  variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                                        {item.date}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            textTransform: 'none',
                                            '&:hover': { backgroundColor: 'primary.main', color: '#fff' },
                                        }}
                                    >
                                        Learn More
                                    </Button>


                                </CardActions>
                            </Card>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LatestMedicalNews;
