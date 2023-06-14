// add.js

import React, { useState } from 'react';

const AddMovieForm = () => {
  const [movieName, setMovieName] = useState('');
  const [flexiUrl, setFlexiUrl] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the form data
    const formData = {
      movieName,
      flexiUrl,
      posterUrl,
      rating,
      releaseDate,
      description
    };
    // Send the formData to your backend or do something else
  };

  return (
    <form onSubmit={handleSubmit} className='addform'>
      <label>
        Movie Name:
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
      </label>
      <label>
        Flexi URL:
        <input type="text" value={flexiUrl} onChange={(e) => setFlexiUrl(e.target.value)} />
      </label>
      <label>
        Poster URL:
        <input type="text" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
      </label>
      <label>
        Rating:
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <label>
        Release Date:
        <input type="text" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovieForm;
