import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import HomePage from './HomePage';
   import AboutPage from './AboutPage';

   const App = () => (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );

  export default App;