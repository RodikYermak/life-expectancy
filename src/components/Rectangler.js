import React from 'react';
import '../App.css';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Reactangler = ({ iconname, area, years }) => {
  return (
    <div className='rectangular-box'>
      <ul className='unordered-list'>
        <li>{iconname}</li>
        <li className='area'>{area}</li>
        <li className='years'>{years}</li>
        <li className='uppercase-text'>years</li>
      </ul>
    </div>
  );
};

export default Reactangler;
