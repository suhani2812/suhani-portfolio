import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollSpider = ({ scrollPosition, documentHeight }) => {
  const controls = useAnimation();
  const spiderRef = useRef(null);
  const stringRef = useRef(null);

  // Calculate spider position based on scroll
  useEffect(() => {
    if (documentHeight <= 0) return;
    
    // Calculate how far down the spider should be (as a percentage)
    const scrollPercentage = Math.min(scrollPosition / documentHeight, 1);
    const windowHeight = window.innerHeight;
    
    // Start slightly below the header and end at the bottom of the viewport
    const startPosition = 100;
    const endPosition = windowHeight - 100;
    
    const yPosition = startPosition + scrollPercentage * (endPosition - startPosition);
    
    controls.start({
      y: yPosition,
      transition: { type: 'spring', stiffness: 50 }
    });
    
    // Update the string length
    if (stringRef.current) {
      stringRef.current.style.height = `${yPosition}px`;
    }
  }, [scrollPosition, documentHeight, controls]);

  const handleSpiderClick = () => {
    // Only allow clicking to go back to top when at the bottom of the page
    if (scrollPosition / documentHeight > 0.9) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Spider web string (separate from the spider) */}
      <div 
        ref={stringRef}
        style={{
          position: 'fixed',
          left: 'calc(2rem + 30px)', // Center with the spider
          top: 0,
          width: '1px',
          height: '100px', // Initial height, will be updated
          backgroundImage: 'linear-gradient(to bottom, white 50%, transparent 50%)',
          backgroundSize: '1px 10px', // Creates dashed effect
          zIndex: 99
        }}
      />
      
      {/* Spider */}
      <motion.div
        ref={spiderRef}
        animate={controls}
        initial={{ y: 100 }}
        style={{
          position: 'fixed',
          left: '2rem',
          top: 0,
          width: '60px',
          height: '60px',
          zIndex: 100,
          cursor: scrollPosition / documentHeight > 0.9 ? 'pointer' : 'default',
        }}
        onClick={handleSpiderClick}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="white" strokeWidth="2" transform="rotate(0, 50, 50)">
            {/* Spider body */}
            <ellipse cx="50" cy="50" rx="15" ry="20" />
            {/* Spider head */}
            <circle cx="50" cy="30" r="8" />
            {/* Spider eyes */}
            <circle cx="47" cy="28" r="2" fill="white" />
            <circle cx="53" cy="28" r="2" fill="white" />
            {/* Spider legs */}
            <path d="M40,40 C30,35 10,50 5,60" />
            <path d="M60,40 C70,35 90,50 95,60" />
            <path d="M40,50 C30,50 10,60 5,75" />
            <path d="M60,50 C70,50 90,60 95,75" />
            <path d="M40,60 C30,65 10,65 5,90" />
            <path d="M60,60 C70,65 90,65 95,90" />
            {/* We don't need the web thread here as we're using a separate element */}
          </g>
        </svg>
      </motion.div>
    </>
  );
};

export default ScrollSpider;
