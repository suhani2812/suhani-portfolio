import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsCategories = [
    {
      category: 'Languages',
      skills: [ 'JAVA', 'Python', 'JavaScript', 'SQL',  'HTML', 'CSS']
    },
    {
      category: 'Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'Django', 'Flask', 'Apache Spark', 'ONNX']
    },
    {
      category: 'Developer Tools',
      skills: ['Git',  'GCP' ,'MongoDB', 'MySQL',  'Anaconda']
    },
    {
      category: 'Libraries',
      skills: ['OpenCV', 'Scikit-learn', 'NLTK', 'Numpy', 'Pandas', 'Pillow']
    },
    {
      category: 'Domains',
      skills: ['Neural Networks', 'Deep Learning', 'Machine Vision', 'NLP', 'Data Structures', 'Algorithms']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <h3 style={{ 
                fontSize: '1.2rem', 
                marginBottom: '1rem', 
                color: 'var(--color-accent)',
                borderBottom: '1px solid rgba(157, 78, 221, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                {category.category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(90, 24, 154, 0.2) 100%)',
                      padding: '0.7rem 1.2rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(157, 78, 221, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
