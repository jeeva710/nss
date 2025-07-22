import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const SecurityGuardServiceCard = () => {
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
                src="https://wallpapercave.com/wp/wp7022779.jpg"
                alt="Security Guard Service"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.05))',
                }}
              />
            </Box>

            {/* 📋 Right Content Section */}
            <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardHeader
                title={
                  <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    Security Guard Services
                  </Typography>
                }
                sx={{ p: 0, mb: 2 }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                  We offer a comprehensive range of security guard services to meet your security needs:
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                  Key Offerings:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                  {[
                    'Armed Security Guards',
                    'Unarmed Security Guards',
                    'Event Security',
                    'Residential Security',
                    'Commercial Security',
                  ].map((item) => (
                    <Box component="li" key={item} sx={{ mb: 0.5 }}>
                      {item}
                    </Box>
                  ))}
                </Box>

                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                  Our professionally trained security personnel are committed to ensuring your safety and security. We hold industry certifications and licenses, and our team has a proven track record of success in safeguarding our clients' interests.
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                  Contact us today to discuss your security requirements and request a customized security solution for your business or property.
                </Typography>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#1565c0',
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

export default SecurityGuardServiceCard;