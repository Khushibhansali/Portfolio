import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const texts = ["A SOFTWARE/ML ENGINEER BY TRADE", "A CREATIVE TECHNOLOGIST BY PASSION"];
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Hide current text before switching

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true); // Show new text with animation
      }, 100); // Small delay to make the transition smoother
    }, 4000); // Change text every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="typing-animation">
      {showText && <span className="typing-text">{texts[index]}</span>}
    </h2>
  );
};

export default TypingAnimation;
