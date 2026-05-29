import { useState, useMemo } from 'react';
import SearchAndFilter from '../components/SearchAndFilter';
import CountryCard from '../components/CountryCard';
import countriesData from '../../data.json';
import './HomePage.css';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const filteredCountries = useMemo(() => {
    return countriesData.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = regionFilter ? country.region === regionFilter : true;
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, regionFilter]);

  return (
    <main className="home-page">
      <SearchAndFilter 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        regionFilter={regionFilter}
        onRegionChange={setRegionFilter}
      />
      
      <div className="container countries-grid">
        {filteredCountries.map(country => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
      
      {filteredCountries.length === 0 && (
        <div className="container no-results">
          <p>No countries found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}
