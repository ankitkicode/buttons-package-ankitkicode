// src/BestiaButton.js
import React from 'react';
import './BestiaButton.css';

const BestiaButton = ({  text }) => {
  return (
    <button
      className="button button--bestia"
    //   style={{
    //     '--bgcolor': bgcolor,
    //     '--hoverBgcolor': hoverBgcolor,
    //   }}
    >
      <div className="button__bg"></div>
      <span>{text}</span>
    </button>
  );
};


export default BestiaButton;
