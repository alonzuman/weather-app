import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import WeatherDisplay from './WeatherDisplay';
// import { dummyData } from './data';
import './App.css';

const API_KEY = 'b7ef55e507766b9eec842f16402034f0';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`);
    setData(res.data);
    setIsLoading(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  }

  // useEffect(() => {
  //   setData(dummyData)
  // }, [])

  return (
    <div className="App">
      <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      {isLoading && <h1>Loading</h1>}
      {data && <WeatherDisplay data={data} />}
    </div>
  );
}

export default App;
