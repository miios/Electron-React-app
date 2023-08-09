import { useNavigate } from 'react-router-dom';

import { ROUTE } from '../../../utils/route';
import { handleQuit } from '../../../utils';

import "./home.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    navigate(route)
  }

  return (
    <div className="home-container">
      <div className="home-header-container">
        <div className="home-header-img" />
        <span className="home-header-title">Clicker game</span>
      </div>
      <div className="home-buttons-container">
        <button className="home-button play" onClick={() => handleRedirect(ROUTE.CLICKER)}>Play</button>
        <button className="home-button settings" onClick={() => handleRedirect(ROUTE.SETTINGS)}>Settings</button>
        <button className="home-button quit" onClick={handleQuit}>Quit</button>
      </div>
    </div>
  );
}
