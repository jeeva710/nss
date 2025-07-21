// import Image from 'next/image';

// interface Client {
//   name: string;
//   logoSrc: string;
//   logoHint: string;
// }

import bsnlLogo from '../../image/BSNLlogo.png';
import pglogo from '../../image/pglogo.png';
import kvlogo from '../../image/kvlogo.png';
import tvslogo from '../../image/tvslogo.png';
import Tamilnadulogo from '../../image/Tamilnadulogo.png';
import icarlogo from '../../image/icarlogo.png';
import tlogo from '../../image/tlogo.png';
import ivrcllogo from '../../image/ivrcllogo.png';

const clients = [
 
  { name: 'Power Grid Corporation of India', logoSrc: pglogo, logoHint: 'power grid logo' },
  { name: 'BSNL', logoSrc: bsnlLogo, logoHint: 'BSNL telecom logo' },
  { name: 'Kendriya Vidyalaya School', logoSrc: kvlogo, logoHint: 'school emblem' },
  { name: 'TVS', logoSrc: tvslogo, logoHint: 'TVS company logo' },
  { name: 'Market Committee', logoSrc: Tamilnadulogo, logoHint: 'market committee seal' },
  { name: 'ICAR', logoSrc: icarlogo, logoHint: 'ICAR research logo' },
  //{ name: 'SSPC', logoSrc: 'https://placehold.co/130x65.png', logoHint: 'SSPC organization logo' },
  { name: 'Tamil Nadu Tourism', logoSrc: Tamilnadulogo, logoHint: 'tourism department logo' },
  { name: 'Tamil Nadu Fisheries Department', logoSrc: Tamilnadulogo, logoHint: 'fisheries dept logo' },
  //{ name: 'IRI', logoSrc: csblogo, logoHint: 'IRI company logo' },
  { name: 'IVRCL', logoSrc: ivrcllogo, logoHint: 'IVRCL company logo' },
  { name: 'L&T', logoSrc: tlogo, logoHint: 'L&T company logo' },
];

const ActionAreaCard = () => {
  return (
    <section
      id="clients"
      style={{
        padding: '4rem 0',
        background: '#f6f6f6',
        scrollMarginTop: 80
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#021c48'
          }}
        >
          Our Valued Clients
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            alignItems: 'center',
            justifyItems: 'center',
            ...(window.innerWidth >= 640 && { gridTemplateColumns: 'repeat(3, 1fr)' }),
            ...(window.innerWidth >= 768 && { gridTemplateColumns: 'repeat(4, 1fr)' }),
            ...(window.innerWidth >= 1024 && { gridTemplateColumns: 'repeat(5, 1fr)' }),
          }}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                padding: '1rem 0'
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '70px',
                  marginBottom: '1rem',
                  transition: 'transform 0.3s'
                }}
              >
                <img
                  src={client.logoSrc}
                  alt={`${client.name} Logo`}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    display: 'block'
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
                  transition: 'color 0.3s'
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#021c48')}
                onMouseOut={e => (e.currentTarget.style.color = '#555')}
              >
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionAreaCard;

