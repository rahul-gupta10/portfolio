import React from 'react';

const StylishLogo = () => {
  return (
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2E7D32', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Background Circle with Gradient */}
      <circle cx="25" cy="25" r="22" stroke="black" strokeWidth="2" fill="url(#grad1)" />

      {/* Shadow for the letter */}
      <text
        x="25"
        y="28"
        fontFamily="Arial"
        fontSize="30"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        filter="url(#f1)"
      >
        R
      </text>

      {/* Letter R */}
      <text
        x="25"
        y="28"
        fontFamily="Arial"
        fontSize="30"
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        R
      </text>
    </svg>
  );
};

export default StylishLogo;
