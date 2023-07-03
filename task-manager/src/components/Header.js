import React, { useState, useEffect } from 'react';

import './App.css';

const Header = () => {
  const [text, setText] = useState('');
  const fullText = "  Get to success faster by managing your tasks with us!";

  const delay = 50; // Delay between each character in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(currentIndex));
        currentIndex++;
       
        setTimeout(typeText, delay);
      }
    };

    typeText();
  }, []);

  return (
    <div className="hcontainer">
      <div className="hHeading">
        <h1>PROFESSIONAL TASK MANAGER</h1>
        <p>{text}</p>
      </div>
      <form></form>
    </div>
  );
};

export default Header;
