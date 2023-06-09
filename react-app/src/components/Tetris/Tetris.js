import React, { useState, useEffect } from 'react';
import './Tetris.css'

const Tetris = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  // Define the card data
  const cardData = [
    { id: 1, value: 'YEET' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' },
    { id: 7, value: 'G' },
    { id: 8, value: 'H' },
    { id: 9, value: 'YEET' },
    { id: 10, value: 'B' },
    { id: 11, value: 'C' },
    { id: 12, value: 'D' },
    { id: 13, value: 'E' },
    { id: 14, value: 'F' },
    { id: 15, value: 'G' },
    { id: 16, value: 'H' },
  ];

  // Shuffle the card data
  const shuffleCards = (cardData) => {
    for (let i = cardData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
    }
    return cardData;
  };

  // Initialize the game
  useEffect(() => {
    const shuffledCards = shuffleCards(cardData);
    setCards(shuffledCards);
  }, []);

  // Handle card click
  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, card]);

    if (flippedCards.length === 1) {
      setMoves((prevMoves) => prevMoves + 1);
      if (flippedCards[0].value === card.value) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card.id]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 300);
      }
    }
  };

  return (
    <div style={{textAlign: 'center'}}>
       <h1 style={{padding: '1rem'}}>Looks like the server is down!</h1>
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
    </div>
  );
};

export default Tetris;
