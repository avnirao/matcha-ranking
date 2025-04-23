import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Seattle from "./pages/seattle";
import NotSeattle from "./pages/NotSeattle";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seattle" element={<Seattle />} />
        <Route path="/not-seattle" element={<NotSeattle />} />
      </Routes>
    </Router>
  );
}
