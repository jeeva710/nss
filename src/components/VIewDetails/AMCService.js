import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AMCServiceCard = () => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f7f7f7' }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
      <Card sx={{ overflow: 'hidden', boxShadow: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {/* 🔧 Left Image Section */}
          <Box sx={{ position: 'relative', flex: 1, minHeight: { xs: 350, md: 450 }, overflow: 'hidden' }}>
            <Box
              component="img"
              src="https://www.swift-india.com/blog/wp-content/uploads/2021/07/AMC.png"
              alt="AMC Services"
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
                  AMC Services
                </Typography>
              }
              sx={{ p: 0, mb: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                Our Annual Maintenance Contract (AMC) services ensure your equipment and infrastructure stay in top condition throughout the year.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                Key Offerings:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                {[
                  'Electrical & Mechanical Equipment Maintenance',
                  'HVAC System Servicing',
                  'IT & Office Infrastructure Support',
                  'Routine Checkups & Diagnostics',
                ].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 0.5 }}>
                    {item}
                  </Box>
                ))}
              </Box>

              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                Our expert technicians follow preventive and corrective maintenance practices to minimize downtime and maximize operational efficiency.
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                Contact us today to tailor a maintenance plan that fits your business or facility requirements.
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

export default AMCServiceCard;