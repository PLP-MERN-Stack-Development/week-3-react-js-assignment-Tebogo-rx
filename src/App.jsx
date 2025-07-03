import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
