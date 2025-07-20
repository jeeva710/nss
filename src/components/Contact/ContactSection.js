import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '4rem 0', background: '#f6f6f6', scrollMarginTop: 80 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#021c48'
        }}>
          Get In Touch
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#555',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Have questions or ready to discuss your needs? Contact us today. We're here to help!
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 900 ? '1fr 1fr' : '1fr',
          gap: '3rem',
          marginBottom: '4rem',
          alignItems: 'stretch'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%' // Ensures equal height
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: '#021c48',
              textAlign: 'center'
            }}>
              Send Us a Message
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
              <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                <ContactForm />
              </div>
            </div>
          </div>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%' // Ensures equal height
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#021c48'
              }}>
                Contact Information
              </h3>
              <p style={{ color: '#555', marginBottom: '1.5rem' }}>
                Feel free to reach out to us through any of the following channels. We aim to respond promptly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <a href="mailto:nssgaran@gmail.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#021c48',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  <Mail style={{ width: 24, height: 24, color: '#fbbf24' }} />
                  <span>nssgaran@gmail.com</span>
                </a>
                <a href="tel:+919443341897" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#021c48',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  <Phone style={{ width: 24, height: 24, color: '#fbbf24' }} />
                  <span>+91 94433 41897</span>
                </a>
                <a href="tel:+918778769855" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#021c48',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  <Phone style={{ width: 24, height: 24, color: '#fbbf24' }} />
                  <span>+91 87787 69855</span>
                </a>
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                color: '#021c48'
              }}>
                Our Branches
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Card style={{ background: '#f3f4f6', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <CardHeader style={{ padding: '1rem 1rem 0.5rem 1rem' }}
                    avatar={
                      <MapPin style={{ width: 20, height: 20, color: '#fbbf24', marginRight: '0.5rem' }} />
                    }
                    title={
                      <Typography variant="h6" style={{ color: '#021c48', fontWeight: 600, fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                        Tamil Nadu
                      </Typography>
                    }
                  />
                  <CardContent style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
                    <address style={{ fontStyle: 'normal', color: '#555', fontSize: '1rem' }}>
                      5/631, First Floor, Adhiyaman Street,<br />
                      Opp. Collector Office, Dharmapuri – 636705
                    </address>
                  </CardContent>
                </Card>
                <Card style={{ background: '#f3f4f6', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <CardHeader style={{ padding: '1rem 1rem 0.5rem 1rem' }}
                    avatar={
                      <MapPin style={{ width: 20, height: 20, color: '#fbbf24', marginRight: '0.5rem' }} />
                    }
                    title={
                      <Typography variant="h6" style={{ color: '#021c48', fontWeight: 600, fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                        Kerala
                      </Typography>
                    }
                  />
                  <CardContent style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
                    <address style={{ fontStyle: 'normal', color: '#555', fontSize: '1rem' }}>
                      17/547, NATIONAL SECURITY SERVICE,<br />
                      MANIYOTTUKALAM, ELAPPULLY,<br />
                      Kanjikode Industrial Area, Palakkad,<br />
                      Kerala, 678622
                    </address>
                  </CardContent>
                </Card>
                <Card style={{ background: '#f3f4f6', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <CardHeader style={{ padding: '1rem 1rem 0.5rem 1rem' }}
                    avatar={
                      <MapPin style={{ width: 20, height: 20, color: '#fbbf24', marginRight: '0.5rem' }} />
                    }
                    title={
                      <Typography variant="h6" style={{ color: '#021c48', fontWeight: 600, fontSize: '1.125rem', display: 'flex', alignItems: 'center' }}>
                        Karnataka
                      </Typography>
                    }
                  />
                  <CardContent style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
                    <address style={{ fontStyle: 'normal', color: '#555', fontSize: '1rem' }}>
                      Near om Shakthi Temple, 11 K.No.17/5,<br />
                      NATIONAL SECURITY SERVICE, SHANTHI NAGAR,<br />
                      Hongasandra, Bengaluru, Bengaluru Urban,<br />
                      Karnataka, 560058
                    </address>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          paddingTop: '3rem',
          borderTop: '1px solid #ddd'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#021c48'
          }}>
            Find Us On The Map
          </h2>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            border: '1px solid #ddd'
          }}>
            <iframe
              src="https://maps.google.com/maps?q=12.104083,78.148056&hl=en&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Guardian Services Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
