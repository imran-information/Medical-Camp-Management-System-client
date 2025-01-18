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
        <Card sx={{ maxWidth: 400 }}>
            <Link to={`/camp-details/${camp._id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={camp.image}
                        alt={camp.name}
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
                            <strong>Participants:</strong> {camp.participantCount}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button onClick={() => navigate(`/camp-details/${camp._id}`)} variant="outlined"> See Details</Button>
            </CardActions>
        </Card>
    );
};

export default CampCard;
