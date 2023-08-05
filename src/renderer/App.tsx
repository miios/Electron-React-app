import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Topbar } from '../components/topbar/topbar';
import { Home } from "./page/home/home";
import { Test } from "./page/test/test";

export const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
