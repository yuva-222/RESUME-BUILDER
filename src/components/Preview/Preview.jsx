import React from 'react';
import styles from './Preview.module.css';

const Preview = ({ formData }) => {
  return (
    <div className={styles.preview}>
      <h2>Resume Preview</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      {/* add more fields as needed */}
    </div>
  );
};

export default Preview;
