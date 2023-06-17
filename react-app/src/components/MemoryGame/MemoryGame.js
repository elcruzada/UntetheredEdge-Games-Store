import React, { useState, useEffect } from 'react';
import './MemoryGame.css'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const cardData = [
    { id: 1, value: 'YEEEET' },
    { id: 2, value: 'Squealize' },
    { id: 3, value: 'SleepyKim' },
    { id: 4, value: 'CONGRATS!' },
    { id: 5, value: 'Boosted' },
    { id: 6, value: 'Andre2' },
    { id: 7, value: 'XG>NewJeans' },
    { id: 8, value: 'Don Hector' },
    { id: 9, value: 'YEEEET' },
    { id: 10, value: 'Squealize' },
    { id: 11, value: 'SleepyKim' },
    { id: 12, value: 'CONGRATS!' },
    { id: 13, value: 'Boosted' },
    { id: 14, value: 'Andre2' },
    { id: 15, value: 'XG>NewJeans' },
    { id: 16, value: 'Don Hector' },
  ];


  const shuffleCards = (cardData) => {
    for (let i = cardData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
    }
    return cardData;
  };

  useEffect(() => {
    const shuffledCards = shuffleCards(cardData);
    setCards(shuffledCards);
  }, []);


  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, card]);

    if (flippedCards.length === 1) {
      setMoves((prevMoves) => prevMoves + 1);
      if (flippedCards[0].value === card.value) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card.id]);
        if (matchedCards.length + 2 === cards.length) {
            setGameWon(true);
          }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 200);
      }
    }
  };

  const resetGame = () => {
    const shuffledCards = shuffleCards(cardData);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false)
  };

  return (
    <div style={{textAlign: 'center'}}>
       <h1 style={{padding: '1rem'}}>Looks your game's server is down!</h1>
        <img src='https://media.tenor.com/OWI_ai132b0AAAAC/wink-dog.gif' alt='doge' style={{height: '20rem'}}/>
       <h2 style={{padding: '1rem'}}>Don't worry. This is just as fun</h2>
      <h1 style={{padding: '1rem'}}>Memory Game</h1>
      <p style={{padding: '.5rem'}}>Moves: {moves}</p>
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) ? 'flipped' : ''} ${
              matchedCards.includes(card.id) ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            {flippedCards.includes(card) || matchedCards.includes(card.id) ? card.value : '?'}
          </div>
        ))}
      </div>
      {gameWon && (
      <div>
        <p style={{color: 'black', marginTop: '2rem'}}>Congratulations! You won!</p>
      </div>
    )}
    <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default MemoryGame;
