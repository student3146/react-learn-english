import React from 'react';
import { useState } from 'react';
import AddWordForm from './AddWord/AddWordForm';
import styles from './Main.module.scss';

const Main = () => {

    const [words, setWords] = useState([]);

    const handleAddWord = (newWord) => {
      setWords([...words, newWord]);
    };
  
    return (
        <div className={styles.main}>
            <AddWordForm onAddWord={handleAddWord} />
            <h1 className={styles.title}>Список доданих слів:</h1>
                <ul className={styles.list}>
                    {words.map((word, index) => (
                    <li key={index}>Word: {word.english} - Translate: {word.ukrainian}</li>
                    ))}
                </ul>
        </div>
    );
};

export default Main;