import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Security from '../../image/Security.png'

const ServiceSections = () => {
  const cardData = [
    {
      title: "Security Guard Services",
      description: `We offer a comprehensive range of security guard services to meet your security needs.

Key Offerings:
• Armed Security Guards
• Unarmed Security Guards
• Event Security
• Residential Security
• Commercial Security
Our professionally trained security personnel are committed to ensuring your safety and security. We hold industry certifications and licenses, and our team has a proven track record of success in safeguarding our clients' interests.`,
      image: Security
    },
    {
      title: "Housekeeping Services",
      description: "We provide professional housekeeping services for residential and commercial premises, ensuring cleanliness, hygiene, and a welcoming environment.",
      image: "/static/images/cards/contemplative-reptile.jpg"
    },
    {
      title: "Driver Services",
      description: "Trained and verified drivers for personal or business travel. Safe, punctual, and professional on all road types and trip durations.",
      image: "/static/images/cards/contemplative-reptile.jpg"
    }
  ];

  return (
    <Box sx={{ background: '#f6f6f6', py: 5 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2 }}>
        <Typography variant="h4" align="center" sx={{ color: '#021c48', fontWeight: 600, mb: 2 }}>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#555', mb: 5, maxWidth: 600, mx: 'auto' }}>
          Discover a wide range of professional services tailored to meet your specific needs. We are committed to excellence and client satisfaction.
        </Typography>

        <Grid container spacing={4}>
          {cardData.map((card, idx) => (
            <Grid item xs={12} key={idx}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: 'hidden'
                   
                }}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    width: { xs: '100%', sm: 300 },
                    height: { xs: 250, sm: '100%' },
                    objectFit: 'cover'
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ color: '#021c48', fontWeight: 600, mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#555', whiteSpace: 'pre-line', textAlign: 'left' }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                 
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceSections;
