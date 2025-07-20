
export default function CareerSection() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#f6f6f6',
      color: '#222'
    }}>
      {/* <Header /> */}
      <main style={{ flexGrow: 1 }}>
        <section id="careers" style={{ padding: '4rem 0', background: '#f3f4f6' }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#021c48'
            }}>
              Careers
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#555',
              marginBottom: '2rem'
            }}>
              We are always looking for talented and dedicated individuals to join our team. 
              At Guardian Services, we offer a dynamic work environment where you can grow your skills and make a difference.
            </p>
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              background: '#fff',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#021c48',
                marginBottom: '1rem'
              }}>
                Current Openings
              </h3>
              <p style={{
                color: '#555',
                marginBottom: '1.5rem'
              }}>
                Currently, there are no specific job openings posted. However, we encourage you to check back regularly for updates. 
                You can also submit your resume for future consideration.
              </p>
              {/* You could add a form here or a mailto link for resume submissions */}
              <a 
                href="mailto:nssgaran@gmail.com?subject=Career%20Inquiry"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 2rem',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  color: '#fff',
                  background: '#fbbf24',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = '#e0a800'}
                onMouseOut={e => e.currentTarget.style.background = '#fbbf24'}
              >
                Submit Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

