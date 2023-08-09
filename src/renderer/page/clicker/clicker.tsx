import React, { useEffect, useState } from 'react';

import { CookieButton } from './CookieButton/cookieButton';
import { UpgradeList } from './upgrade/upgrade';
import { ROUTE } from '../../../utils/route';

import "./clicker.css";
import { useNavigate } from 'react-router-dom';

export const Clicker = () => {
  const [score, setScore] = useState(0)
  const [cps, setCps] = useState(0)
  const navigate = useNavigate();

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

  const handleRedirect = (route) => {
    navigate(route)
  }

  return (
    <div className="clicker">
      <CookieButton score={score} cps={cps} handleScore={handleScore} />
      <UpgradeList score={score} handleScore={handleScore} handleCps={handleCps} />
      <button className="clicker-button-quit" onClick={() => handleRedirect(ROUTE.HOME)}>Quit</button>
    </div>
  );
}

