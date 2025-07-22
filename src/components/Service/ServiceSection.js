import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Security,
  CleaningServices,
  DriveEta,
  Restaurant,
  Nature,
  Build,
  Grass,
  Construction,
  Agriculture
} from '@mui/icons-material';

const services = [
  {
    title: "Security Guard Services",
    icon: <Security sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Comprehensive security solutions with trained professionals.`,
    path: '/services/security-guard'
  },
  {
    title: "Housekeeping Services",
    icon: <CleaningServices sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Reliable cleaning services for homes and businesses.`,
    path: '/services/house-keeping'
  },
  {
    title: "Driver Services",
    icon: <DriveEta sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Safe and dependable transportation for all your needs.`,
    path: '/services/driver-service'
  },
  {
    title: "Cook Services",
    icon: <Restaurant sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Expert culinary services for events and personal dining.`,
    path: '/services/cook-service'
  },
  {
    title: "Tree Cutting Services",
    icon: <Nature sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Professional tree trimming, removal, and stump grinding.`,
    path: '/services/tree-cutting-service'
  },
  {
    title: "AMC Services",
    icon: <Build sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Asset maintenance contracts for optimal performance.`,
    path: '/services/amc-service'
  },
  {
    title: "Horticulture Services",
    icon: <Grass sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Expert landscaping and garden maintenance services.`,
    path: '/services/horticulture-service'
  },
  {
    title: "Excavator Operator Services",
    icon: <Construction sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Skilled operators for excavation and earthmoving tasks.`,
    path: '/services/excavator-operator'
  },
  {
    title: "Field Farm Operator Services",
    icon: <Agriculture sx={{ fontSize: 60, color: '#021c48' }} />,
    description: `Experienced operators for agricultural operations.`,
    path: '/services/field-form-service'
  }
];

const ServiceSections = () => {
  return (
    <Box sx={{ background: '#f6f6f6', py: 6 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600, color: '#021c48', mb: 2 }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#555', mb: 5, maxWidth: 600, mx: 'auto' }}>
          Discover a wide range of professional services tailored to meet your specific needs. We are committed to excellence and client satisfaction.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: 360,
                  //height: 420,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 3,
                  borderRadius: 3,
                  p: 2,
                  background: '#fff'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                  {service.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ color: '#021c48', fontWeight: 600, textAlign: 'center', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      whiteSpace: 'pre-line',
                      textAlign: 'center'
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Link to={service.path}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#ffffffff',
                        color: '#021c48',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#d6d6d6ff'
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </Link>
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
