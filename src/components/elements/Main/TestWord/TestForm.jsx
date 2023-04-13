import React, { useState, useEffect } from "react";
import styles from './TestForm.module.scss';
import { Link } from "react-router-dom";
import wordsData from "../../../../data/words.json";

function TestForm() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const randomWords = wordsData.words
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    const shuffledWords = randomWords.map((word) => {
      const { translation } = word;
      const shuffledTranslations = [
        translation,
        ...randomWords
          .map((w) => w.translation)
          .filter((t) => t !== translation),
      ].sort(() => Math.random() - 0.5);
      return { ...word, translations: shuffledTranslations };
    });
    setWords(shuffledWords);
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  const handleRepeatClick = () => {
    setCurrentWordIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const currentWord = words[currentWordIndex];

  if (!currentWord) {
    return (
      <div className={styles.result}>
        <h2>Результати:</h2>
        <p>
          Ви набрали {score} балів з 10 ({(score * 10).toFixed()}%).
        </p>
        <button onClick={handleRepeatClick}>Повторити тест</button>
        <button><Link to='/'>Exit</Link></button>
      </div>
    );
  }

  return (
    <div className={styles.test}>
      <h2>Тестування: {currentWord.word}</h2>
      <ul className={styles.words}>
        {currentWord.translations.map((translation, index) => (
          <li
            className={styles.word}
            key={index}
            onClick={() =>
              handleAnswerClick(translation === currentWord.translation)
            }
          >
            {translation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestForm;
