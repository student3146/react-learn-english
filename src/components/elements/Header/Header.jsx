import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header = ({ words }) => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to='/main'>Add Word</Link>
          </li>
          <li>
            <Link className={styles.link} to='/test'>Test</Link>
          </li>
        </ul>
      </nav>
      <h1>Words List:</h1>
      <ul>
        {words.words.map((word, index) => (
          <li key={index}>{word.word} - {word.translation}</li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
