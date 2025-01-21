import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const CampCard = ({ camp }) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                maxWidth: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Link to={`/camp-details/${camp._id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>

                    <CardMedia
                        component="img"
                        image={camp.image}
                        alt={camp.name || 'Camp Image'}
                        sx={{
                            height: 200,
                            objectFit: 'cover',
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {camp.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Date:</strong> {camp.date} <br />
                            <strong>Time:</strong> {camp.time} <br />
                            <strong>Location:</strong> {camp.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={2}>
                            <strong>Healthcare Professional:</strong> {camp.healthcareProfessional}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={2}>
                            <strong>Fees:</strong> {camp.fees}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={2}>
                            <strong>Participants:</strong> {camp.participantCount ?? 'Not available'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
                <Button
                    onClick={() => navigate(`/camp-details/${camp._id}`)}
                    variant="outlined"
                >
                    See Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default CampCard;
