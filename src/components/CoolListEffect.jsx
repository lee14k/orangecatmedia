import React, { useState, useEffect } from 'react';

const CoolListEffect = () => {
  const [translatePercentage, setTranslatePercentage] = useState(0);

  const calculatePercentage = (scrollY) => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    // Map the scroll position (0 to scrollableHeight) to the percentage range (-43 to 15)
    const scrollFraction = scrollY / scrollableHeight;
    return 15 - scrollFraction * (15 - (-45));
  };

  const handleScroll = () => {
    const newPercentage = calculatePercentage(window.scrollY);

    setTranslatePercentage(newPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="absolute-service-list" 
      style={{
        willChange: 'transform',
        transform: `translate3d(0px, ${translatePercentage}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      Logos<br />
      Guidelines<br />
      <span className="services-sticker-text">∞</span>
      Merch<br />
      Illustrations<br />
      Packaging<br />
      Signage<br />
      Icons<br />
      Stickers<br />
      Social posts<br />
      + more
    </div>
  );
};

export default CoolListEffect;
