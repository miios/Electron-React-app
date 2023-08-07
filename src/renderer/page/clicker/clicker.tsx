import React, { useEffect, useState } from 'react';

import { CookieButton } from './CookieButton/cookieButton';
import { UpgradeList } from './upgrade/upgrade';

import "./clicker.css";

export const Clicker = () => {
  const [score, setScore] = useState(0)
  const [cps, setCps] = useState(0)

  const handleScore = (sumNumber: number) => {
    setScore((prevState) => prevState + sumNumber)
  }

  const handleCps = (sumNumber: number) => {
    setCps((prevState) => prevState + sumNumber)
  }

  useEffect(() => {
    const myInterval = setInterval(() => {
      setScore(prevState => prevState + cps)
    }, 1000);
    return () => clearInterval(myInterval);
  }, [cps]);

  return (
    <div className="clicker">
      <CookieButton score={score} cps={cps} handleScore={handleScore} />
      <UpgradeList score={score} handleScore={handleScore} handleCps={handleCps} />
    </div>
  );
}

