import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './Main.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Speech from './speech/Speech';
import Reviews from './reviews/Reviews';
import Advantage from './advantage/Advantage';
import Entry from './entry/Entry';

class Main extends Component {
  render() {
    return(
      <Grid container spacing={0}>
        <Header />
        <Advantage />
        <Reviews />
        <Speech />
        <Footer />
      </Grid>
    );
  }
}

export default Main;
