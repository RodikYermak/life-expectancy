import React from 'react';
import './App.css';
import Rectangler from './components/Rectangler';
import SearchForm from './components/SearchForm';
import SocialFollow from './components/SocialFollow';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <SearchForm />
      <Rectangler iconname={faFacebook} area='my area' years='78.20' />
      <Rectangler iconname={faTwitter} area='san diego county' years='81.43' />
      <Rectangler iconname={faYoutube} area='california' years='80.90' />
      <Rectangler iconname={faInstagram} area='united states' years='78.60' />
      <SocialFollow />
    </div>
  );
}

export default App;
