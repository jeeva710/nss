import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import HousekeepingImg from '../../image/Housekeeping.png';

const HousekeepingServiceCard = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f7f7f7' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Card sx={{ overflow: 'hidden', boxShadow: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            {/* 🖼️ Left Image Section */}
            <Box
              sx={{
                position: 'relative',
                flex: 1,
                minHeight: { xs: 350, md: 450 },
                overflow: 'hidden',
              }}
            >
              <Box
                            component="img"
                            src={HousekeepingImg}
                            alt="Housekeeping Services"
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
                  background:
                    'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                }}
              />
            </Box>

            {/* 📋 Right Content Section */}
            <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardHeader
                title={
                  <Typography variant="h4" sx={{ color: '#00796b', fontWeight: 'bold' }}>
                    Housekeeping Services
                  </Typography>
                }
                sx={{ p: 0, mb: 2 }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                  Our housekeeping services are designed to keep your spaces clean and comfortable. We offer:
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                  Key Offerings:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                  {[
                    'Residential Cleaning',
                    'Commercial Cleaning',
                    'Deep Cleaning',
                    'Janitorial Services',
                  ].map((item) => (
                    <Box component="li" key={item} sx={{ mb: 0.5 }}>
                      {item}
                    </Box>
                  ))}
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                  Our dedicated housekeeping staff is known for their professionalism and attention to detail. We use high-quality cleaning products and equipment to ensure your spaces are immaculate. Whether you need regular cleaning or a one-time deep cleaning, we've got you covered.
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                  Contact us today to schedule housekeeping services for your home or business.
                </Typography>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#00796b',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#004d40',
                      },
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
};

export default HousekeepingServiceCard;