import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ResumeForm from '../../components/ResumeForm/ResumeForm';
import Preview from '../../components/Preview/Preview';
import styles from './Home.module.css';

const Home = () => {
  const [formData, setFormData] = React.useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className={styles.home}>
      <Header />
      <main>
        <ResumeForm onSubmit={handleFormSubmit} />
        <Preview formData={formData} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
