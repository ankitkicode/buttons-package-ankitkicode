import React from 'react';
import './GreipButton.css'; // Make sure to link your CSS file here

const GreipButton = ({ text }) => {
  return (
    <button className="button button--greip">
      <span><span>{text}</span></span>
    </button>
  );
};

export default GreipButton;
