import { Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header shadow">
      <div className="container header-content">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          <Moon size={16} fill={theme === 'dark' ? 'currentColor' : 'none'} />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}
