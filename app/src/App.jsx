import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  // Filter countries based on search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  return (
    <>
      <h1>Country APP</h1>
      {/* Search bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search country by name..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {filteredCountries.length > 0 ? (
        <Countries 
          countries={filteredCountries} 
          onRemoveCountry={handleRemoveCountry} 
        />
      ) : (
        <h2>No countries found</h2>
      )}
    </>
  );
}

export default App;
