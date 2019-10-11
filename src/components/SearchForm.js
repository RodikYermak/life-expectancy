import React from 'react';
import '../App.css';

const SearchForm = () => {
  return (
    <div className='App'>
      <h1>Life Expectancy App</h1>
      <form>
        <input
          type='text'
          placeholder='Enter census tract number ex.0000.00'
          className='inputSection'
        />
        <button className='find-button'>Find</button>
      </form>
      <p className='api'>API https://data.cdc.gov/resource/5h56-n989.json</p>
    </div>
  );
};

export default SearchForm;
