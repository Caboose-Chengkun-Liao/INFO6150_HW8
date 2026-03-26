import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/destinations/Destinations';
import Vienna from './pages/destinations/Vienna';
import Sydney from './pages/destinations/Sydney';
import CapeTown from './pages/destinations/CapeTown';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{' '}
        <Link to="/destinations">Destinations</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />}>
          <Route path="vienna" element={<Vienna />} />
          <Route path="sydney" element={<Sydney />} />
          <Route path="cape-town" element={<CapeTown />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
