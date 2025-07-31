import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageCarousel from './Heading/ImageCarousel';
import ActionAreaCard from './Home/ActionAreaCard';
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh' }}>
        <ImageCarousel />
        <ActionAreaCard/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
