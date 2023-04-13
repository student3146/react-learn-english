import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../img/dictionary.png';


const Header = ({ words }) => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to='/main'>Add Word</Link>
          </li>
          <li>
            <Link className={styles.link} to='/test'>Test</Link>
          </li>
        </ul>
      </nav>
      <h1>Words List</h1>
      <ul className={styles.words}>
        {words.words.map((word, index) => (
          <li className={styles.word} key={index}>Слово: {word.word} Переклад: {word.translation}</li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
