import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import countriesData from '../../data.json';
import './DetailPage.css';

export default function DetailPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  const country = countriesData.find(c => c.alpha3Code === code);

  if (!country) {
    return (
      <div className="container not-found">
        <h2>Country not found</h2>
        <Link to="/" className="back-button shadow">
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>
    );
  }

  const getBorderCountryName = (borderCode) => {
    const borderCountry = countriesData.find(c => c.alpha3Code === borderCode);
    return borderCountry ? borderCountry.name : borderCode;
  };

  const formattedPopulation = new Intl.NumberFormat().format(country.population);
  
  // Helper to extract nested values
  const nativeName = country.nativeName || country.name;
  const currencies = country.currencies ? country.currencies.map(c => c.name).join(', ') : 'N/A';
  const languages = country.languages ? country.languages.map(l => l.name).join(', ') : 'N/A';
  const topLevelDomain = country.topLevelDomain ? country.topLevelDomain.join(', ') : 'N/A';

  return (
    <main className="detail-page container">
      <div className="controls">
        <button onClick={() => navigate(-1)} className="back-button shadow">
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      <div className="country-detail-content">
        <div className="flag-wrapper">
          <img src={country.flags.svg || country.flags.png} alt={`Flag of ${country.name}`} />
        </div>

        <div className="details-wrapper">
          <h1>{country.name}</h1>
          
          <div className="details-grid">
            <div className="main-details">
              <p><strong>Native Name:</strong> {nativeName}</p>
              <p><strong>Population:</strong> {formattedPopulation}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion || 'N/A'}</p>
              <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
            </div>
            
            <div className="sub-details">
              <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
              <p><strong>Currencies:</strong> {currencies}</p>
              <p><strong>Languages:</strong> {languages}</p>
            </div>
          </div>

          <div className="border-countries">
            <strong>Border Countries:</strong>
            <div className="border-tags">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map(border => (
                  <Link 
                    key={border} 
                    to={`/country/${border}`} 
                    className="border-tag shadow"
                  >
                    {getBorderCountryName(border)}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
