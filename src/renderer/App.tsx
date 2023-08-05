import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Topbar } from '../components/topbar/topbar';

export const Home = () => {
  return <div>Home Page</div>;
}

export const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
