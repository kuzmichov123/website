// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
