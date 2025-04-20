import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'MedAI Vision',
      description: 'A comprehensive medical imaging AI platform using GANs, Vision Transformers, and LLMs for enhanced diagnostic capabilities.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Llama', 'CUDA', 'MongoDB', 'Git'],
      points: [
        'Developed a super-resolution GAN using TensorFlow, achieving 92% validation accuracy for 200 epochs on 54,000 multi-label image dataset.',
        'Implemented an image-to-image translation CycleGAN using PyTorch to convert MRI to CT scans, enhancing image compatibility for multi-modal analysis.',
        'Designed a hybrid Vision Transformer and CNN for multi-label disease classification with 88.4% accuracy on test dataset.',
        'Fine-tuned Llama 3.2 11B LLM on medical literature to provide explainable AI insights with a retention of 74% on scale.'
      ]
    },
    {
      title: 'Diabetic Retinopathy Classification',
      description: 'AI system for classifying diabetic retinopathy severity from retinal images.',
      technologies: ['Python', 'PyTorch', 'MySQL', 'Google Colab', 'Git'],
      points: [
        'Developed and trained a lightweight EfficientNet-B0 Vision Transformer model, achieving 87% accuracy on a dataset of 33,700 labeled retinal images.',
        'Applied advanced data preprocessing techniques, including data augmentation and transformations, to enhance model generalization and performance.'
      ]
    },
    {
      title: 'GenoCryptNet',
      description: 'DNA-based steganography system for secure and covert communication using machine learning.',
      technologies: ['Python', 'Machine Learning', 'BioPython', 'Scikit-learn', 'Git'],
      points: [
        'Designed a secure communication system by embedding encrypted messages within DNA sequences using ML-driven encoding techniques.',
        'Implemented detection-resistant steganographic algorithms ensuring high data integrity and biological plausibility.',
        'Utilized Biopython for sequence manipulation and Scikit-learn to train classifiers for validation of encoded sequences.'
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
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, index) => (
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {project.title}
              </h3>
              
              <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(157, 78, 221, 0.2)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      color: 'var(--color-primary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul style={{ paddingLeft: '1.5rem' }}>
                {project.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', lineHeight: 1.6 }}>
                    {point}
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

export default Projects;
