import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  useEffect(() => {
    const titles = [
      "AI/ML Developer",
      "Full Stack Developer",
      "Deep Learning",
      "Computer Vision",
      "Web Developer"
    ];
    
    const typewriter = document.getElementById('typewriter');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        typewriter.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriter.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } 
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
    
    return () => {
      clearTimeout(type);
    };
  }, []);

  return (
    <section className="section" id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ 
              display: 'block', 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              color: 'var(--color-primary)'
            }}
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              marginBottom: '1rem',
              fontWeight: 700 
            }}
          >
            Suhani Goel
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ 
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
              marginBottom: '2rem',
              color: 'var(--color-text-secondary)',
              height: '60px',
              display: 'flex'
            }}
          >
            <span id="typewriter" className="typewriter"></span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ 
              fontSize: '1.1rem', 
              maxWidth: '600px',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)'
            }}
          >
            Building cutting-edge AI solutions with deep learning and computer vision.
            Currently focusing on medical imaging applications and generative AI technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a 
              href="#projects"
              style={{
                backgroundColor: 'var(--color-primary)',
                padding: '0.8rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 500,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
            >
              View My Work
            </a>
            
            <a 
              href="#contact"
              style={{
                border: '1px solid var(--color-primary)',
                padding: '0.8rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 500,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                marginTop: '2rem',
                justifyContent: 'center'
            }}
            >
            <a 
                href="https://github.com/suhani2812" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                color: 'var(--color-text)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
            >
                <i className="fab fa-github"></i>
            </a>
            
            <a 
                href="https://www.linkedin.com/in/suhani-goel-70683021b/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                color: 'var(--color-text)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
            >
                <i className="fab fa-linkedin"></i>
            </a>
            
           
            
            <a 
                href="https://drive.google.com/file/d/1iIb5VF9d5ExOamsDfXZ_YtshSz3g-Ru_/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                color: 'var(--color-text)',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
            >
                <i className="far fa-file-alt"></i>
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
