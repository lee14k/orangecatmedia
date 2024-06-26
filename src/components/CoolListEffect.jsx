import React, { useState, useEffect } from "react";

const CoolListEffect = () => {
  const [translatePercentage, setTranslatePercentage] = useState(0);

  const calculatePercentage = (scrollY) => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    // Map the scroll position (0 to scrollableHeight) to the percentage range (-43 to 15)
    const scrollFraction = scrollY / scrollableHeight;
    return 15 - scrollFraction * 1.5 * (2 - -45);
  };

  const handleScroll = () => {
    const newPercentage = calculatePercentage(window.scrollY);
    setTranslatePercentage(newPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative" }} className="overflow-hidden	">
      <div
        className="absolute-service-list"
        style={{
          willChange: "transform",
          transform: `translate3d(0px, ${translatePercentage}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        Photos
        <br />
        Videos
        <br />
        Website Design
        <br />
        Social Media
        <br />
        Marketing <br />
        Branding
        <br />+ more
      </div>
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundImage:
            "linear-gradient(to bottom, white, rgba(255,255,255,0))",
          position: "absolute",
          top: 0,
          pointerEvents: "none",
        }}
      />
      <div
        className="bottomgradient"
        style={{
          height: "550px",
          backgroundImage:
            "linear-gradient(to top, white, rgba(255,255,255,0))",
          position: "absolute",
          bottom: 0,
          pointerEvents: "none",
          top: "35%",
          width: "3500px",
          zIndex: "100",
        }}
      />
    </div>
  );
};

export default CoolListEffect;
