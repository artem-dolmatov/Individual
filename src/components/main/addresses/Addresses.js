import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import LocationOn from '../../../images/Location.svg'
import './Addresses.css';

class Addresses extends Component {
  render() {
    return (
      <Grid container spacing={0} className='advantageGrid' id='addresses'>
        <div className='advantageH2'>
          <h2>Адреса</h2>
        </div>
        <Grid item sm={6} xs={12}>
          <div className='addressesDiv'>
            <div className='advantageDivFloat'>
              <img src={LocationOn} className='advantageIcons' alt='location'/>
            </div>
            <div>
              <h3 className='advantageH3'>ул. Мельникайте, 55 (Студгородок)</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='addressesDiv'>
            <div className='advantageDivFloat'>
              <img src={LocationOn} className='advantageIcons' alt='location'/>
            </div>
            <div>
              <h3 className='advantageH3'>ул. П. Артамонова, 9 (Тюменский мкр-он)</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='addressesDiv'>
            <div className='advantageDivFloat'>
              <img src={LocationOn} className='advantageIcons' alt='location'/>
            </div>
            <div>
              <h3 className='advantageH3'>ул. Малиновского, 5Б (район Мыс)</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='addressesDiv'>
            <div className='advantageDivFloat'>
              <img src={LocationOn} className='advantageIcons' alt='location'/>
            </div>
            <div>
              <h3 className='advantageH3'>ул. Республики, 14 офис 102 (напротив ТГУ)</h3>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Addresses;
