// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ fetchBooks }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a book..."
        className="p-2 border rounded-lg w-1/2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
