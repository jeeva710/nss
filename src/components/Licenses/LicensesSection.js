import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Award, FileText as FileBadgeIcon, ShieldCheck, BadgeCheck } from 'lucide-react';

const LicensesSection = () => {
  const licenses = [
    { 
      name: "ISO 9001:2015 Certified", 
      description: "Guardian Services is proud to be ISO 9001:2015 certified, demonstrating our commitment to internationally recognized quality management standards. This certification ensures our processes consistently meet client needs and enhance client satisfaction.", 
      Icon: Award, 
      imagePath: "https://placehold.co/300x200.png",
      imageAlt: "ISO 9001:2015 Certificate",
      imageHint: "ISO certificate quality" 
    },
    { 
      name: "MSME Registered", 
      description: "We are a registered Micro, Small, and Medium Enterprise (MSME) under the Government of India. This registration acknowledges our contribution to the economic growth and development of the nation.", 
      Icon: FileBadgeIcon, 
      imagePath: "https://placehold.co/300x201.png",
      imageAlt: "MSME Registration Certificate",
      imageHint: "MSME document government"
    },
    { 
      name: "PSARA Compliant", 
      description: "Guardian Services operates in full compliance with the Private Security Agencies (Regulation) Act (PSARA). This ensures our security services meet all regulatory requirements, providing reliable and legally compliant security solutions.", 
      Icon: ShieldCheck, 
      imagePath: "https://placehold.co/300x202.png",
      imageAlt: "PSARA License Document",
      imageHint: "PSARA license security"
    },
  ];

  return (
    <section id="licenses" style={{ padding: '4rem 0', background: '#f6f6f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <BadgeCheck style={{ width: 64, height: 64, color: '#fbbf24', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#021c48', marginBottom: '0.5rem' }}>
            Our Licenses & Certifications
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#555', marginTop: '0.5rem', maxWidth: '700px', margin: '0 auto' }}>
            Guardian Services is committed to upholding the highest standards of quality, compliance, and professionalism in all our operations.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        // Responsive columns
          ...(window.innerWidth >= 1200
            ? { gridTemplateColumns: 'repeat(3, 1fr)' }
            : window.innerWidth >= 900
            ? { gridTemplateColumns: 'repeat(2, 1fr)' }
            : {})
        }}>
          {licenses.map((license, index) => (
            <Card
              key={index}
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                transition: 'box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                minHeight: '420px',
              }}
            >
              <CardHeader
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingTop: '2rem',
                  paddingBottom: 0,
                  background: '#f6f6f6',
                }}
                avatar={
                  <license.Icon style={{ width: 48, height: 48, color: '#fbbf24', marginBottom: '1rem' }} />
                }
                title={
                  <Typography variant="h6" style={{ fontWeight: 600, color: '#021c48', fontSize: '1.25rem' }}>
                    {license.name}
                  </Typography>
                }
              />
              <CardContent style={{ textAlign: 'center', flexGrow: 1, padding: '2rem 1.5rem 1.5rem' }}>
                <p style={{ color: '#555', marginBottom: '1.5rem', minHeight: '80px' }}>{license.description}</p>
                <div style={{
                  marginTop: 'auto',
                  width: '100%',
                  aspectRatio: '3/2',
                  background: '#f3f4f6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  minHeight: '120px'
                }}>
                  <img
                    src={license.imagePath}
                    alt={license.imageAlt}
                    width={300}
                    height={200}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    data-ai-hint={license.imageHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;
