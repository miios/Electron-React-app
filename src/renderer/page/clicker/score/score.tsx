import React from 'react';

import './score.css';

export const Score = (props) => {
  const { score, cps } = props;
  return (
    <div className='score-container'>
      <span className='score'>score: {score}</span>
      <span className='cps'>cps: {cps}</span>
    </div>
  );
}

