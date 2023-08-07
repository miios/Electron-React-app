import React from 'react';

import { Score } from '../score/score';

import "./cookieButton.css";

export const CookieButton = (props) => {
  const { score, cps, handleScore } = props;
  return (
    <div className="cookie-container" onClick={() => handleScore(1)}>
      <div className="cookie-button" />
      <Score score={score} cps={cps} />
    </div>
  );
}
