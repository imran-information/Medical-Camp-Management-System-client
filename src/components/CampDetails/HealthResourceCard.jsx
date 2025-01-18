import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';

const HealthResourceCard = ({ resource }) => {
    const { title, description, category, url, publication_date, company_image } = resource;
    return (
        <Link to={url} className=''>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={"https://htmlburger.com/blog/wp-content/uploads/2024/07/healthcare-websites.jpg"}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title.slice(0, 25)}..
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                            {category}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{publication_date}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description.slice(0, 100)}..
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Link>
    );
};

export default HealthResourceCard;