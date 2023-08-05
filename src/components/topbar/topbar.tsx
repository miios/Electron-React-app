import { handleQuit, handleMinimize } from '../../utils';

import './topbar.css'

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <span className="topbar-title" >Title</span>
      <div className="topbar-ipc-buttons">
        <button className="topbar-ipc-button topbar-minimize-button" onClick={handleMinimize}>-</button>
        <button className="topbar-ipc-button topbar-close-button" onClick={handleQuit}>X</button>
      </div>
    </div>
  )
}
