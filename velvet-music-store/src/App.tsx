import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HOME_ROUTE,
  MIDI_KEYBOARDS,
  STUDIO_MONITORS
} from './assets/constants/routes/routes';
import Home from './components/routes/home/Home';
import AppLayout from './AppLayout';
import ProductPage from './components/routes/products-pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={MIDI_KEYBOARDS} element={<ProductPage />} />
          <Route path={STUDIO_MONITORS} element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
