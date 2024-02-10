import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { HOME_ROUTE } from './assets/constants/routes/routes';
import Home from './components/routes/home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
