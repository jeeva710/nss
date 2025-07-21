import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import karuna from '../../image/karuna.jpg';

const AboutContent = () => {
  const teamMembers = [
    {
      name: 'Mr. Santha Kumar',
      role: 'Manager',
      phone: '+91 70101 66729',
    },
    {
      name: 'Mr. B. Vignesh',
      role: 'Accountant',
      phone: '+91 94426 59931',
    },
  ];

  return (
    <section id="about" style={{ padding: '4rem 0', background: '#f6f6f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <Typography variant="h3" style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#021c48' }}>
              About National Security Service
            </Typography>
            <Typography variant="body1" style={{ fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.7 }}>
              National Security Service (NSS) was founded by Mr. R. Karunagaran in 1997. It is your dedicated partner in providing top-tier security and facility management solutions. With decades of experience, we have built a reputation for reliability, professionalism, and unwavering commitment to our clients' safety and satisfaction.
            </Typography>
            <Typography variant="body1" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Our mission is to deliver exceptional service through highly trained personnel, cutting-edge technology, and customized solutions tailored to the unique needs of each client. We believe in fostering long-term relationships built on trust and excellence.
            </Typography>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <CheckCircle size={24} color="#fbbf24" />
                <span style={{ fontSize: '1rem', color: '#333' }}>Experienced and Vetted Professionals</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <CheckCircle size={24} color="#fbbf24" />
                <span style={{ fontSize: '1rem', color: '#333' }}>Customized Solutions for Every Need</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle size={24} color="#fbbf24" />
                <span style={{ fontSize: '1rem', color: '#333' }}>Commitment to Safety and Security</span>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="contained" size="large" style={{ background: '#fbbf24', color: '#fff' }}>
                Get in Touch
              </Button>
            </Link>
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            height: '600px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
          }}>
            <img
              src={karuna}
              alt="National Security Service team meeting"
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            />
          </div>
        </div>

        <div style={{ paddingTop: '3rem', borderTop: '1px solid #ddd' }}>
          <Typography variant="h4" style={{ fontWeight: 600, textAlign: 'center', marginBottom: '2rem', color: '#021c48' }}>
            Meet Our Team
          </Typography>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            justifyItems: 'center'
          }}>
            {teamMembers.map((member) => (
              <Card key={member.name} style={{ width: '100%', maxWidth: '320px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', background: '#fff' }}>
                <CardHeader
                  title={
                    <Typography variant="h6" style={{ color: '#021c48', fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                  }
                  subheader={member.role}
                  style={{ textAlign: 'center', paddingTop: '1.5rem' }}
                />
                <CardContent style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
                  {member.phone && (
                    <a href={`tel:${member.phone}`} style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1rem', color: '#021c48', textDecoration: 'none' }}>
                      <Phone size={16} />
                      {member.phone}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
