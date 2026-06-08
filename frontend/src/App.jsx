import React, { useEffect, useRef, useState } from 'react';
import './index.css';

function App() {
  const observerRef = useRef(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="container nav-content">
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-bright)' }}>DSR.</span>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container">
        <div className="fade-up">
          <div style={{ marginBottom: '1rem' }}>
            <span className="badge">Engineering Student</span>
            <span className="badge" style={{ marginLeft: '0.5rem' }}>Indore, MP</span>
          </div>
          <h1>Devansh Singh Rajawat</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', maxWidth: '700px', marginTop: '1rem' }}>
            Pursuing B.Tech in Artificial Intelligence and Data Science at NMAMIT. 
            Focused on building efficient software solutions and intelligent systems.
          </p>
        </div>
      </section>

      {/* Education & Experience - Combined for less scrolling */}
      <section className="container">
        <div className="grid">
          <div className="fade-up">
            <h2>Education</h2>
            <div className="card glass">
              <h3>B.Tech (AI & Data Science)</h3>
              <p style={{ fontSize: '0.9rem' }}>NMAMIT • 2024 - 2027</p>
            </div>
            <div className="card glass">
              <h3>Diploma (CSE)</h3>
              <p style={{ fontSize: '0.9rem' }}>Shri Vaishnav Polytechnic • 2021 - 2024</p>
              <p className="badge" style={{ marginTop: '0.5rem' }}>Score: 75.6%</p>
            </div>
          </div>
          
          <div className="fade-up">
            <h2>Experience</h2>
            <div className="card glass">
              <h3>Rajawat Enterprises</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Business Correspondent • 2022 - 2024</p>
            </div>
            <div className="card glass">
              <h3>State Bank of India</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Merchant/CSP Analyst • 2020 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container">
        <div className="fade-up">
          <h2>Key Projects</h2>
        </div>
        <div className="grid">
          <div className="card glass fade-up">
            <h3>AndroXploit</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Security-focused research tool developed using Kali Linux and Web technologies.
            </p>
          </div>
          <div className="card glass fade-up">
            <h3>Library System</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Full-stack management application built with PHP, JavaScript, and MySQL.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Info */}
      <section className="container">
        <div className="grid">
          <div className="fade-up">
            <h2>Technical Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Python', 'Java', 'C/C++', 'Web Dev', 'MySQL', 'R'].map(s => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>
          <div className="fade-up">
            <h2>Interests</h2>
            <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              Music • Trekking • Cycling • Travelling
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Hobbies */}
      <section className="container">
        <div className="grid">
          <div className="fade-up">
            <h2>Achievements</h2>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
              <li>✓ Gymnastics Certification (Indore)</li>
              <li>✓ Synthesizer Degree (ABGM Mandal)</li>
            </ul>
          </div>
          <div className="fade-up">
            <h2>Contact</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
              devanshsinghrajawat120@gmail.com<br />
              +91-9900719893
            </p>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="fade-up" style={{ opacity: 0.6, fontSize: '0.8rem' }}>
          © 2024 Devansh Singh Rajawat. Professional Portfolio.
        </div>
      </footer>
    </div>
  );
}

export default App;
