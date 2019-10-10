import React from 'react';
import '../App.css';

const SearchForm = () => {
  return (
    <div className='App'>
      <h1>Life Expectancy App</h1>
      <form>
        <input
          type='text'
          placeholder='Enter your street address or Zip code'
          className='inputSection'
        />
        <button className='find-button'>Find</button>
      </form>
    </div>
  );
};

export default SearchForm;
