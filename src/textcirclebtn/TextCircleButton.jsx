import React from 'react';
import './TextCircleButton.css'; // Add any specific CSS for TextCircleButton

const TextCircleButton = ({ text, direction = 'normal', hover = "false" }) => {
  const rotationClass = direction === 'reverse' ? 'rotate-reverse' : 'rotate-normal';
  // const hoverClass = hover === "true" ? 'hover-true' : 'hover-false';

  return (
    <button className={`button button--surtur `}>
      <svg className={`textcircle ${rotationClass}`} viewBox="0 0 500 500">
        <title>{text}</title>
        <defs>
          <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
        </defs>
        <text>
          <textPath xlinkHref="#textcircle" aria-label={text} textLength="900">
            {text}
          </textPath>
        </text>
      </svg>
      <svg aria-hidden="true" className="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <path className="eye__outer"
          d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z" />
        <path className="eye__lashes-up"
          d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
        <path className="eye__lashes-down"
          d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
        <circle className="eye__iris" cx="35" cy="35.31" r="5.221" />
        <circle className="eye__inner" cx="35" cy="35.31" r="10.041" />
      </svg>
    </button>
  );
};

export default TextCircleButton;
