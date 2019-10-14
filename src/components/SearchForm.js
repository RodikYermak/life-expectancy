import React from 'react';
import '../App.css';

const SearchForm = ({ apiUrl = 'Default Unknown', value }) => {
  const handleChange = event => {
    value = event.target.value;
  };

  const handleSubmit = event => {
    alert('A census tract number was entered: ' + value);
    event.preventDefault();
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter census tract number ex.0000.00'
          className='inputSection'
          value={value}
          onChange={handleChange}
        />
        <input type='submit' value='Submit' className='find-button' />
      </form>
      <p className='api message-box'>API {apiUrl}</p>
    </div>
  );
};

export default SearchForm;
