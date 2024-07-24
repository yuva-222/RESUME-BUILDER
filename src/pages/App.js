import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Assuming you have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch, faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './pages/LoginPage'; // Create this component
import RegisterPage from './pages/RegisterPage'; // Create this component

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage("Let's GO!");
    alert('Done!');
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1><FontAwesomeIcon icon={faBolt} /> Online-Resume-Builder</h1>
          <div className="search-container">
            <input type="text" placeholder="search...." />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#resume-templates">Resume Templates</Link></li>
            <li><Link to="#cover-letter">Cover Letter</Link></li>
            <li><Link to="#blog">Blog</Link></li>
            <li><Link to="#contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </header>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            <div>
              <section id="home" className="hero">
                <div className="hero-content">
                  <h1>Welcome to Our Website</h1>
                  <p>Your one-stop solution for professional documents and more.</p>
                  <button onClick={handleClick} className="btn">Click Me</button>
                  {message && <p>{message}</p>}
                </div>
              </section>

              <section id="about">
                <h2>About Us</h2>
                <p>Information about the company, mission, and values.</p>
              </section>

              <section id="resume-templates">
                <h2>Resume Templates</h2>
                <div className="card-container">
                  {[...Array(12).keys()].map((i) => (
                    <div className="card" key={i}>
                      <h3>Template {i + 1}</h3>
                      <p>Professional and modern resume template.</p>
                      <a href="#" className="icon-link">
                        <FontAwesomeIcon icon={faPlus} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section id="cover-letter">
                <h2>Cover Letter</h2>
                <p>Tips and templates for writing an effective cover letter.</p>
                <div className="cover-letter-container">
                  {[1, 2, 3].map((i) => (
                    <div className="card" key={i}>
                      <h3>Template {i}</h3>
                      <p>Professional and modern cover letter template.</p>
                      <a href="#" className="icon-link">
                        <FontAwesomeIcon icon={faPlus} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section id="blog">
                <h2>Blog</h2>
                <div className="blog-container">
                  {[1, 2, 3].map((i) => (
                    <div className="card" key={i}>
                      <div className="profile-picture">
                        <h5 className="upload-icon">
                          <FontAwesomeIcon icon={faPlus} size="2x" />
                        </h5>
                        <input
                          className="file-uploader"
                          type="file"
                          onChange={handleUpload}
                          accept="image/*"
                        />
                      </div>
                      <div className="content-text">
                        <p>Brief introduction to the blog post {i}.</p>
                      </div>
                      <div className="author-info">
                        <p><strong>Author:</strong> John Doe</p>
                        <p><strong>Company:</strong> ABC Corporation</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="scroll-dots">
                  {[...Array(5).keys()].map((i) => (
                    <div className="dot" key={i}>
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                  ))}
                </div>
              </section>

              <section id="contact">
                <h2>Contact Us</h2>
                <div className="contact-form">
                  <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </section>
            </div>
          } />
        </Routes>

        <footer>
          <div className="footer-content">
            <div className="webpage-content">
              <h2>Summary</h2>
              <ul>
                <li><Link to="#resume-templates">Resume Templates</Link></li>
                <li><Link to="#cover-letter">Cover Letter</Link></li>
                <li><Link to="#blog">Blog</Link></li>
                <li><Link to="#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="address">
              <h2>Address</h2>
              <p>1234 Main Street,<br />Anytown, USA 12345.</p>
              <p>Phone: 123-456-7890<br />Email: xyz@gmail.com</p>
            </div>
            <div className="social-links">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="copy-rights">
            <p>&copy; 2024 Online Resume Builder. All rights reserved. <a href="#"><strong>Terms & Policies</strong></a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
