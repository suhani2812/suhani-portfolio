import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });
    
    try {
      const response = await fetch('https://getform.io/f/bkkyzrmb', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus({ submitted: true, submitting: false, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        setStatus({ submitted: false, submitting: false, error: 'Something went wrong, please try again.' });
      }
    } catch (err) {
      setStatus({ submitted: false, submitting: false, error: 'Something went wrong, please try again.' });
    }
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p style={{ textAlign: 'center', marginBottom: '2rem', lineHeight: 1.8 }}>
              Feel free to reach out to me for collaborations, projects, or just to say hello. 
              I'm always open to discussing new ideas and opportunities.
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Email</h4>
                <p>suhani281202goel@gmail.com
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Phone</h4>
                <p>+91 7017707184</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              background: 'rgba(90, 24, 154, 0.1)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(157, 78, 221, 0.2)'
            }}
          >
            <div>
              <label 
                htmlFor="name" 
                style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(157, 78, 221, 0.3)',
                  color: 'var(--color-text)',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(157, 78, 221, 0.3)',
                  color: 'var(--color-text)',
                  fontSize: '1rem'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(157, 78, 221, 0.3)',
                  color: 'var(--color-text)',
                  resize: 'vertical',
                  fontSize: '1rem'
                }}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status.submitting}
              style={{
                backgroundColor: 'var(--color-primary)',
                padding: '0.8rem 1.5rem',
                borderRadius: '4px',
                border: 'none',
                color: 'white',
                fontWeight: 500,
                fontSize: '1rem',
                cursor: status.submitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: status.submitting ? 0.7 : 1
              }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.submitted && (
              <p style={{ color: 'var(--color-primary)', textAlign: 'center' }}>
                Message sent successfully!
              </p>
            )}
            
            {status.error && (
              <p style={{ color: '#e74c3c', textAlign: 'center' }}>
                {status.error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
