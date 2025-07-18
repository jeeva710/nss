import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh' }}>
        <p>Home Page</p>
        <p>neefuieunfewnfe</p>
        {/* Add more content here to create scroll space */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
