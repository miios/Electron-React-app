import React from 'react';

export const Score = (props) => {
  const { score, cps } = props;
  return (
    <div>
      <span>score: {score}</span>
      <span>cps: {cps}</span>
    </div>
  );
}
