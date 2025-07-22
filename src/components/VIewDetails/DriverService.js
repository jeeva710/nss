import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const DriverService = () => (
  <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f7f7f7' }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
      <Card sx={{ overflow: 'hidden', boxShadow: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ position: 'relative', flex: 1, minHeight: { xs: 350, md: 450 }, overflow: 'hidden' }}>
            <Box component="img" src="https://th.bing.com/th/id/OIP.TLDwoK3ql-eJ_759NJtzyQHaE8?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Driver Services" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.05))' }} />
          </Box>
          <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardHeader title={<Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>Driver Services</Typography>} sx={{ p: 0, mb: 2 }} />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                We provide professional drivers for personal and commercial needs. Our team is punctual, reliable, and trained for safe transportation.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>Key Offerings:</Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3, color: '#444' }}>
                {['Personal Chauffeur', 'Corporate Drivers', 'Long-Distance Travel', 'Event Transportation'].map(item => (
                  <Box component="li" key={item} sx={{ mb: 0.5 }}>{item}</Box>
                ))}
              </Box>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#555', mb: 3 }}>
                All drivers are background-verified and licensed professionals committed to passenger safety.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', mb: 4 }}>
                Get in touch to book a dedicated driver for your travel needs.
              </Typography>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={{ backgroundColor: '#1976d2', color: '#fff', '&:hover': { backgroundColor: '#1565c0' }, width: { xs: '100%', sm: 'auto' } }}>
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

export default DriverService;