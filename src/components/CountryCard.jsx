import { Link } from 'react-router-dom';
import './CountryCard.css';

export default function CountryCard({ country }) {
  const formattedPopulation = new Intl.NumberFormat().format(country.population);

  return (
    <Link to={`/country/${country.alpha3Code}`} className="country-card shadow">
      <div className="flag-container">
        <img src={country.flags.svg || country.flags.png} alt={`Flag of ${country.name}`} loading="lazy" />
      </div>
      <div className="country-info">
        <h2>{country.name}</h2>
        <p><strong>Population:</strong> {formattedPopulation}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
      </div>
    </Link>
  );
}
