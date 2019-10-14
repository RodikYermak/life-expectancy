import React from 'react';
import './App.css';
import Header from './components/Header';
import Rectangler from './components/Rectangler';
import SearchForm from './components/SearchForm';
import SocialFollow from './components/SocialFollow';
import MyLocation from './components/MyLocation';

import {
  faHome,
  faFlagUsa,
  faCannabis,
  faCity
} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  state = {
    items: [],
    error: null,
    isLoaded: false,
    apiUrl: 'empty link'
  };

  componentDidMount() {
    // const url = 'https://data.cdc.gov/resource/5h56-n989.json';
    const url =
      // 'https://data.cdc.gov/resource/5h56-n989.json?county_name=San%20Diego%20County';
      // 'https://data.cdc.gov/resource/5h56-n989.json?county_name=San%20Diego%20County&full_ct_num=0001.00';
      'https://data.cdc.gov/resource/5h56-n989.json?county_name=San%20Diego%20County&full_ct_num=0041.00';
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
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
    this.setState({ apiUrl: url });
  }

  render() {
    const { error, isLoaded, items, apiUrl } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header />
          <SearchForm apiUrl={apiUrl} />
          <MyLocation />
          <Rectangler
            iconname={faHome}
            area={`census tract number - ${items[0].full_ct_num}`}
            years={items[0].le}
            text='years to live in this neighborhood'
          />

          <Rectangler
            iconname={faCity}
            area={items[0].county_name}
            years={items[0].se_le}
            text='life expectancy county error'
          />
          <Rectangler
            iconname={faCannabis}
            area={items[0].state_name}
            years={items[0].le_range}
            text='life expectancy range in years'
          />
          <Rectangler
            iconname={faFlagUsa}
            area='united states'
            years='78.60'
            text='years, the static data'
          />
          <SocialFollow />
        </div>
      );
    }
  }
}

export default App;
