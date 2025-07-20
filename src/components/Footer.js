import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const footerStyles = {
  backgroundColor: '#23272f',
  color: '#f3f4f6',
  padding: '3rem 0',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  textAlign: 'center',
}
const gridMdStyles = {
  ...gridStyles,
  gridTemplateColumns: 'repeat(3, 1fr)',
  textAlign: 'left',
}

const sectionStyles = {
  marginBottom: '1rem',
};

const headingStyles = {
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: '1rem',
};

const subHeadingStyles = {
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: '1rem',
};

const textStyles = {
  fontSize: '0.875rem',
  color: 'rgba(243,244,246,0.8)',
};

const linkStyles = {
  color: 'rgba(243,244,246,0.8)',
  fontSize: '0.875rem',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'inline-block',
};

const linkHoverStyles = {
  color: '#fbbf24',
};

const addressStyles = {
  fontStyle: 'normal',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '0.875rem',
  color: 'rgba(243,244,246,0.8)',
};

const footerBottomStyles = {
  marginTop: '2.5rem',
  paddingTop: '2rem',
  borderTop: '1px solid rgba(243,244,246,0.2)',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: 'rgba(243,244,246,0.6)',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Responsive grid: use 3 columns on desktop, 1 on mobile
  const isDesktop = window.innerWidth >= 768;
  const appliedGridStyles = isDesktop ? gridMdStyles : gridStyles;

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={appliedGridStyles}>
          {/* Company Info */}
          <div style={sectionStyles}>
            <h3 style={headingStyles}>Guardian Services</h3>
            <p style={textStyles}>
              Your Trusted Security Partner. Providing reliable and professional services to meet your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div style={sectionStyles}>
            <h4 style={subHeadingStyles}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link
                  to="/"
                  style={linkStyles}
                  onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                  onMouseOut={e => (e.target.style.color = linkStyles.color)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  style={linkStyles}
                  onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                  onMouseOut={e => (e.target.style.color = linkStyles.color)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={linkStyles}
                  onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                  onMouseOut={e => (e.target.style.color = linkStyles.color)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={linkStyles}
                  onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                  onMouseOut={e => (e.target.style.color = linkStyles.color)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={sectionStyles}>
            <h4 style={subHeadingStyles}>Contact Us</h4>
            <address style={addressStyles}>
              <a
                href="mailto:nssgaran@gmail.com"
                style={{ ...linkStyles, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                onMouseOut={e => (e.target.style.color = linkStyles.color)}
              >
                <Mail size={18} />
                nssgaran@gmail.com
              </a>
              <a
                href="tel:+919443341897"
                style={{ ...linkStyles, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                onMouseOut={e => (e.target.style.color = linkStyles.color)}
              >
                <Phone size={18} />
                +91 94433 41897
              </a>
              <a
                href="tel:+918778769855"
                style={{ ...linkStyles, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                onMouseOver={e => (e.target.style.color = linkHoverStyles.color)}
                onMouseOut={e => (e.target.style.color = linkStyles.color)}
              >
                <Phone size={18} />
                +91 87787 69855
              </a>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={footerBottomStyles}>
          <p>&copy; {currentYear} National Security Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
