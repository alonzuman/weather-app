import React from 'react';
import './SearchForm.css';

export default function SearchForm({ handleSubmit, query, setQuery }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <i className="fas fa-search"></i>
        <input placeholder='Search by city name' type='text' value={query} onChange={e => setQuery(e.target.value)} />
      </form>
    </div>
  )
}
