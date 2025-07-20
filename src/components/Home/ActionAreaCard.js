// import Image from 'next/image';

// interface Client {
//   name: string;
//   logoSrc: string;
//   logoHint: string;
// }

const clients = [
  { name: 'Power Grid Corporation of India', logoSrc: 'https://placehold.co/180x90.png', logoHint: 'power grid logo' },
  { name: 'BSNL', logoSrc: 'https://placehold.co/150x75.png', logoHint: 'BSNL telecom logo' },
  { name: 'Kendriya Vidyalaya School', logoSrc: 'https://placehold.co/200x80.png', logoHint: 'school emblem' },
  { name: 'TVS', logoSrc: 'https://placehold.co/120x60.png', logoHint: 'TVS company logo' },
  { name: 'Market Committee', logoSrc: 'https://placehold.co/160x70.png', logoHint: 'market committee seal' },
  { name: 'ICAR', logoSrc: 'https://placehold.co/140x70.png', logoHint: 'ICAR research logo' },
  { name: 'SSPC', logoSrc: 'https://placehold.co/130x65.png', logoHint: 'SSPC organization logo' },
  { name: 'Tamil Nadu Tourism', logoSrc: 'https://placehold.co/220x70.png', logoHint: 'tourism department logo' },
  { name: 'Tamil Nadu Fisheries Department', logoSrc: 'https://placehold.co/240x80.png', logoHint: 'fisheries dept logo' },
  { name: 'IRI', logoSrc: 'https://placehold.co/140x60.png', logoHint: 'IRI company logo' },
  { name: 'IVRCL', logoSrc: 'https://placehold.co/150x65.png', logoHint: 'IVRCL company logo' },
  { name: 'L&T', logoSrc: 'https://placehold.co/100x50.png', logoHint: 'L&T company logo' },
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

