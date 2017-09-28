import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ExpandLess from 'material-ui-icons/ExpandLess';
import './Main.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Speech from './speech/Speech';
import Reviews from './reviews/Reviews';
import Entry from './entry/Entry';
import Addresses from './addresses/Addresses';
import Types from './types/Types';

class Main extends Component {
  render() {
    return(
      <Grid container spacing={0}>
        <Header />
        <Types />
        <Reviews />
        <Speech />
        <Entry />
        <Addresses />
        <Footer />
        <div className='buttonUp'>
          <a href='#main'>
            <Button fab>
              <ExpandLess />
            </Button>
          </a>
        </div>
      </Grid>
    );
  }
}

export default Main;
