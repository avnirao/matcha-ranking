import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Washington from './pages/washington';
import California from './pages/california';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/washington" element={<Washington />} />
        <Route path="/california" element={<California />} />
      </Routes>
    </Router>
  );
}
