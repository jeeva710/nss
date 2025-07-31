import bsnlLogo from '../../image/BSNLlogo.png';
import pglogo from '../../image/pglogo.png';
import kvlogo from '../../image/kvlogo.png';
import tvslogo from '../../image/tvslogo.png';
import Tamilnadulogo from '../../image/Tamilnadulogo.png';
import icarlogo from '../../image/icarlogo.png';
import tlogo from '../../image/tlogo.png';
import ivrcllogo from '../../image/ivrcllogo.png';


const clients = [
  {
    name: 'Power Grid Corporation of India',
    logoSrc: pglogo,
    logoHint: 'power grid logo',
    link: 'https://www.powergrid.in/en',
  },
  {
    name: 'BSNL',
    logoSrc: bsnlLogo,
    logoHint: 'BSNL telecom logo',
    link: 'https://portal.bsnl.in/myportal/home',
  },
  {
    name: 'Kendriya Vidyalaya School',
    logoSrc: kvlogo,
    logoHint: 'school emblem',
    link: 'https://kvsangathan.nic.in/en/',
  },
  {
    name: 'TVS',
    logoSrc: tvslogo,
    logoHint: 'TVS company logo',
    link: 'https://www.tvsmotor.com/',
  },
  {
    name: 'Market Committee',
    logoSrc: Tamilnadulogo,
    logoHint: 'market committee seal',
    link: 'https://www.agrimark.tn.gov.in/index.php/Infra',
  },
  {
    name: 'ICAR',
    logoSrc: icarlogo,
    logoHint: 'ICAR research logo',
    link: 'https://icar.org.in/',
  },
  {
    name: 'Tamil Nadu Tourism',
    logoSrc: Tamilnadulogo,
    logoHint: 'tourism department logo',
    link: 'https://www.tamilnadutourism.tn.gov.in/',
  },
  {
    name: 'Tamil Nadu Fisheries Department',
    logoSrc: Tamilnadulogo,
    logoHint: 'fisheries dept logo',
    link: 'https://www.fisheries.tn.gov.in/',
  },
  {
    name: 'IVRCL',
    logoSrc: ivrcllogo,
    logoHint: 'IVRCL company logo',
    link: 'https://www.ivrcl.com/',
  },
  {
    name: 'L&T',
    logoSrc: tlogo,
    logoHint: 'L&T company logo',
    link: 'https://www.larsentoubro.com/',
  },
];

const ActionAreaCard = () => {
  return (
    <section
      id="clients"
      style={{
        padding: '4rem 0',
        background: '#f6f6f6',
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#021c48',
          }}
        >
          Our Valued Clients
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                padding: '1rem 0',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <div
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '70px',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={client.logoSrc}
                  alt={`${client.name} Logo`}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                  data-ai-hint={client.logoHint}
                />
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#555',
                  margin: 0,
                  transition: 'color 0.3s',
                }}
              >
                {client.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionAreaCard;
