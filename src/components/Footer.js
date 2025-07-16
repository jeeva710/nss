import React from 'react'
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
        
        <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-4">Guardian Services</h3>
            <p className="text-sm text-primary-foreground/80">
              Your Trusted Security Partner. Providing reliable and professional services to meet your needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors text-sm text-primary-foreground/80">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors text-sm text-primary-foreground/80">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors text-sm text-primary-foreground/80">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors text-sm text-primary-foreground/80">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-headline font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
              <a href="mailto:nssgaran@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <Mail size={18} />
                nssgaran@gmail.com
              </a>
              <a href="tel:+919443341897" className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <Phone size={18} />
                +91 94433 41897
              </a>
              <a href="tel:+918778769855" className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <Phone size={18} />
                +91 87787 69855
              </a>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} National Security Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer
