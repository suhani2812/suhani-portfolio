import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Feyn Labs',
      period: 'Sept 2023 - Nov 2023',
      description: [
        'Conducted Data Cleaning, Data Preprocessing, Data Augmentation, Transformations on big data images dataset.',
        'Utilized computer vision and Convolutional Neural Networks to process NDVI, multispectral and hyperspectral images, enhancing vegetation segmentation accuracy by 11% for precision agriculture applications.'
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              style={{ 
                background: 'rgba(90, 24, 154, 0.2)', 
                borderRadius: '8px',
                padding: '2rem',
                border: '1px solid rgba(157, 78, 221, 0.2)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                {exp.title}
              </h3>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                {exp.company}
              </h4>
              <p style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                {exp.period}
              </p>
              
              <ul style={{ paddingLeft: '1.5rem' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
