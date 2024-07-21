// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './store/store';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import './index.css';

const App: React.FC = () => {
  return (
    <Router basename='/Assessment'>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<MoviePage />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
