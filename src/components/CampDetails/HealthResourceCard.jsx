import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HealthResourceCard = ({ resource }) => {
    const { title, description, category, url, publication_date } = resource;

    return (
        <Link to={url} className="block transition-transform duration-300 hover:scale-105" style={{ textDecoration: 'none' }}>
            <Card className='dark:bg-neutral-900' sx={{
                maxWidth: 360,
                height: 500, // Ensures uniform card height
                borderRadius: 3,
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease',
                '&:hover': { boxShadow: 6 }
            }}>
                {/* Image Fixed at the Top */}
                <CardMedia
                    component="img"
                    image="https://htmlburger.com/blog/wp-content/uploads/2024/07/healthcare-websites.jpg"
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 200,  // Fixed height for all images
                        objectFit: 'cover',
                        position: 'relative', // Keeps the image at the top
                    }}
                />

                <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1, padding: 2.5, display: 'flex', flexDirection: 'column' }}>
                        {/* Title */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: 'primary.main' }}>
                            {title}
                        </Typography>

                        {/* Category */}
                        <Typography className='dark:text-gray-300' variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1 }}>
                            {category}
                        </Typography>

                        {/* Date */}
                        <Typography className='dark:text-gray-400' variant="caption" sx={{ color: 'text.disabled', mb: 1, display: 'block' }}>
                            {publication_date}
                        </Typography>

                        {/* Description */}
                        <Typography className='dark:text-gray-400' variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                            {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                {/* Actions - Always Aligned at Bottom */}
                <CardActions sx={{ padding: 2, justifyContent: 'space-between' }}>
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
                        Share
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold',
                            backgroundColor: 'primary.main',
                            '&:hover': { backgroundColor: 'primary.dark' },
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
};

export default HealthResourceCard;
