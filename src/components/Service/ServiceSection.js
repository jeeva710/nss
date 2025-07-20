// import { services } from '@/lib/data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ServiceSections = () => {
  const cardData = [
    {
      title: "Lizard",
      description: "Lizards are a widespread group of squamate reptiles...",
      image: "/static/images/cards/contemplative-reptile.jpg"
    },
    {
      title: "Snake",
      description: "Snakes are elongated, legless, carnivorous reptiles...",
      image: "/static/images/cards/contemplative-reptile.jpg"
    },
    {
      title: "Turtle",
      description: "Turtles are reptiles of the order Testudines...",
      image: "/static/images/cards/contemplative-reptile.jpg"
    }
  ];

  return (
    <div style={{ background: '#f6f6f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#021c48'
        }}>
          Our Services
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#555',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Discover a wide range of professional services tailored to meet your specific needs. We are committed to excellence and client satisfaction.
        </p>
        <Grid container spacing={4}>
          {cardData.map((card, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                style={{
                  maxWidth: 345,
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  borderRadius: '12px',
                  background: '#fff',
                  transition: 'box-shadow 0.3s',
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                />
                <CardContent style={{
                  flexGrow: 1,
                  width: '100%',
                  textAlign: 'center',
                  padding: '1.5rem 1rem'
                }}>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: '#021c48', fontWeight: 600 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#555', marginTop: '0.5rem' }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: '16px',
                    background: '#021c48',
                    color: '#fff',
                    fontWeight: 600,
                    borderRadius: '8px',
                    textTransform: 'none'
                  }}
                  onClick={() => alert(`View details for ${card.title}`)}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ServiceSections;
