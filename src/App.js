// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  // State to hold the list of books
  const [books, setBooks] = useState([]);

  // Function to fetch books from the Open Library API
  const fetchBooks = async (title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      const data = await response.json();
      // Update state with the top 10 search results
      setBooks(data.docs.slice(0, 10));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="App p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Book Finder</h1>
      {/* SearchBar component with fetchBooks function passed as a prop */}
      <SearchBar fetchBooks={fetchBooks} />
      {/* BookList component with books array passed as a prop */}
      <BookList books={books} />
    </div>
  );
}

export default App;
