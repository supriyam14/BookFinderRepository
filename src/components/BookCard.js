

import React from 'react';

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={coverUrl} alt={book.title} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-gray-600">by {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p className="text-gray-500">Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
