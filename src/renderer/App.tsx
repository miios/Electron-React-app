import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { Topbar } from '../components/topbar/topbar';
import { Home } from "./page/home/home";
import { Clicker } from "./page/clicker/clicker";

import './App.css';

export const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clicker" element={<Clicker />} />
      </Routes>
    </Router>
  );
}
