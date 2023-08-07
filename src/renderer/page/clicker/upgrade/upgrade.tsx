import React from 'react';

import { getInitialUpgrades } from '../../../../utils/state';

import "./upgrade.css";

export const UpgradeList = (props) => {
  const { score, handleScore, handleCps } = props;
  return (
    <div className="UpgradeContainer">
      <div className="UpgradeBox">
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
    </div>
  );
}
