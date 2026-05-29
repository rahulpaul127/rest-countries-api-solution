import { Search, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './SearchAndFilter.css';

export default function SearchAndFilter({ searchTerm, onSearchChange, regionFilter, onRegionChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRegionSelect = (region) => {
    if (regionFilter === region) {
      onRegionChange('');
    } else {
      onRegionChange(region);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="search-filter-container container">
      <div className="search-box shadow">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search for a country..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-box" ref={dropdownRef}>
        <button 
          className="filter-button shadow"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {regionFilter ? regionFilter : 'Filter by Region'}
          <ChevronDown size={16} />
        </button>
        
        {isDropdownOpen && (
          <ul className="filter-dropdown shadow">
            {regions.map(region => (
              <li 
                key={region} 
                onClick={() => handleRegionSelect(region)}
                className={regionFilter === region ? 'active' : ''}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
