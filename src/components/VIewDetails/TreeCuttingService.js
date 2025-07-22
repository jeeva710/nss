import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TreeCuttingService = () => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f7f7f7' }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
      <Card sx={{ overflow: 'hidden', boxShadow: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {/* 🌳 Left Image Section */}
          <Box sx={{ position: 'relative', flex: 1, minHeight: { xs: 350, md: 450 }, overflow: 'hidden' }}>
            <Box
              component="img"
              src="https://lh3.googleusercontent.com/kqp-5qUkt9WhrkS96pXcaALwUHbyRFXzDguHvJsnOdVO0CS8Z61tYzzUBEpt_R6TE_FJ9L93=w3176"
              alt="Tree Cutting Services"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.05))',
              }}
            />
          </Box>

          {/* 📋 Right Content Section */}
          <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardHeader
              title={
                <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                  Tree Cutting Services
                </Typography>
              }
              sx={{ p: 0, mb: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                We offer safe and efficient tree cutting and pruning services for residential and commercial spaces.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                Key Offerings:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                {['Tree Removal', 'Trimming & Shaping', 'Stump Grinding', 'Emergency Tree Service'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 0.5 }}>
                    {item}
                  </Box>
                ))}
              </Box>

              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                Operated by licensed arborists with proper safety gear and insurance coverage to protect your property and surroundings.
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                Schedule a site visit for a customized quote and assessment of your greenery.
              </Typography>

              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#1565c0' },
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Request This Service
                </Button>
              </Link>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  </Box>
);

export default TreeCuttingService;