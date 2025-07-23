import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FieldImg from '../../image/Field.png';

const ExcavatorOperatorService = () => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f7f7f7' }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
      <Card sx={{ overflow: 'hidden', boxShadow: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, position: 'relative' }}>
          {/* 🚜 Left Image Section */}
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              src={FieldImg}
              alt="Field Services"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
           
            {/* Optional overlay — usually goes inside a container with position: relative */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.05))',
              }}
            />
          </Box>

          {/* 📋 Right Content Section */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardHeader
              title={
                <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                  Excavator Operator Services
                </Typography>
              }
              sx={{ p: 0, mb: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                Hire skilled excavator operators for precise and reliable construction, land clearing, and digging work.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                Key Offerings:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                {[
                  'Site Excavation',
                  'Trench Digging',
                  'Earth Moving',
                  'Demolition Support',
                ].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 0.5 }}>
                    {item}
                  </Box>
                ))}
              </Box>

              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                Our operators are trained, licensed, and experienced in handling heavy machinery across varied terrains.
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                Book professional excavator operators to keep your earthworks on track and on time.
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

export default ExcavatorOperatorService;
