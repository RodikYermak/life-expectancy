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

class App extends React.Component {
  state = {
    items: [],
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    const url = 'https://data.cdc.gov/resource/5h56-n989.json';
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log(result[0]);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <SearchForm />
          {/* <Rectangler iconname={faFacebook} area='my area' years='78.20' /> */}
          <Rectangler
            iconname={faFacebook}
            area={items[0].full_ct_num}
            // years='78.20'
            years={items[0].le}
          />

          <Rectangler
            iconname={faTwitter}
            // area='san diego county'
            area={items[0].county_name}
            years='81.43'
          />
          {/* <Rectangler iconname={faYoutube} area='california' years='80.90' /> */}
          <Rectangler
            iconname={faYoutube}
            area={items[0].state_name}
            years='80.90'
          />
          <Rectangler
            iconname={faInstagram}
            area='united states'
            years='78.60'
          />
          <SocialFollow />
        </div>
      );
    }
  }
}

export default App;
