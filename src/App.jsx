import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
