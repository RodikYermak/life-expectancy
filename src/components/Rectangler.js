import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons';

const Reactangler = ({ iconname, area, years, text }) => {
  return (
    <div className='rectangular-box'>
      <ul className='unordered-list'>
        {/* <li>{iconname}</li> */}
        <li>
          <FontAwesomeIcon icon={iconname} className='icon-style' />
        </li>

        <li className='area'>{area}</li>
        <li className='years'>{years}</li>
        <li className='uppercase-text'>{text}</li>
      </ul>
    </div>
  );
};

export default Reactangler;
