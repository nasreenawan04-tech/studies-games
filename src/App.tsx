import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MathSpeedChallenge = lazy(() => import('./pages/MathSpeedChallenge')); // Assuming MathSpeedChallenge is in pages/MathSpeedChallenge.js
const ToolPage = lazy(() => import('./pages/tool-page')); // A generic tool page

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other game routes */}
          <Route path="/math-games" element={lazy(() => import('./pages/math-games'))} />
          <Route path="/science-games" element={lazy(() => import('./pages/science-games'))} />
          <Route path="/memory-games" element={lazy(() => import('./pages/memory-games'))} />
          <Route path="/language-games" element={lazy(() => import('./pages/language-games'))} />
          <Route path="/logic-games" element={lazy(() => import('./pages/logic-games'))} />
          {/* This route now points to the generic ToolPage */}
          <Route path="/game/:gameId" element={<ToolPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;