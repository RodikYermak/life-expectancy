import React from 'react';
import './App.css';
import Rectangler from './components/Rectangler';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div>
      <SearchForm />
      <Rectangler
        iconname='places icon'
        area='san diego county'
        years='81.43'
      />
      <Rectangler iconname='place icon' area='my area' years='78.20' />
      <Rectangler iconname='state icon' area='california' years='80.90' />
      <Rectangler iconname='country icon' area='united states' years='78.60' />
    </div>
  );
}

export default App;
