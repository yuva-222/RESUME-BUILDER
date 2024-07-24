import React, { useState } from 'react';
import styles from './ResumeForm.module.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      {/* add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;
