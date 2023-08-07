import React, { useEffect, useState } from 'react';

import { getInitialUpgrades } from '../../../utils/state';

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
  }, []);

  const UpgradeList = () => {
    return (
      <div className="UpgradeList">
        <h3>Upgrades</h3>
        <ul>
          {getInitialUpgrades.map(upgrade => (
            <li key={upgrade.id} className="Upgrade">
              <div>
                {upgrade.name} ({upgrade.cps}cps): {upgrade.cost}c
              </div>
              <button
                className="buyBtn"
                disabled={score < upgrade.cost}
                onClick={() => {
                  handleScore(-upgrade.cost)
                  handleCps(upgrade.cps)
                }}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  const Score = () => {
    return <span>cps: {cps} - score: {score}</span>;
  }

  const BigCookieButton = () => {
    return (
      <button className="cookieBtn" onClick={() => handleScore(1)} />
    );
  }

  return (
    <div className="App">
      <Score />
      <BigCookieButton />
      <UpgradeList />
    </div>
  );
}

