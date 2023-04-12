import React, { useState } from 'react';
import styles from './AddWordForm.module.scss';
import { Link } from 'react-router-dom';

const AddWordForm = ({ onAddWord }) => {
  const [englishWord, setEnglishWord] = useState('');
  const [ukrainianWord, setUkrainianWord] = useState('');

  const handleEnglishWordChange = (event) => {
    setEnglishWord(event.target.value);
  };

  const handleUkrainianWordChange = (event) => {
    setUkrainianWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddWord({ english: englishWord, ukrainian: ukrainianWord });
    setEnglishWord('');
    setUkrainianWord('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.english}>
        <label>English word:</label>
        <input
          type="text"
          value={englishWord}
          onChange={handleEnglishWordChange}
          required
        />
      </div>
      <div className={styles.english}>
        <label>Ukrainian word:</label>
        <input
          type="text"
          value={ukrainianWord}
          onChange={handleUkrainianWordChange}
          required
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} type="submit">Add word</button>
        <button className={styles.btn}><Link className={styles.link} to='/'>Exit</Link></button>
      </div>
    </form>
  );
};

export default AddWordForm;
