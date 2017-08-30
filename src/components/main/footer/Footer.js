import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './Footer.css'
import Phone from '../../../images/phone.svg'

class Footer extends Component {
  render() {
    return (
        <Grid container spacing={0} className='footerBg'>
          <Grid item xs={12} className='footerShadow'>
            <h2 className='footerH2'>Индивидуальное обучение</h2>
            <p>ООО "Формула"</p>
            <p>ИНН 7207022691, ОГРН 1127232020651</p>
            <p>Тюмень ул.Червишевский тракт д.31 корпус 1</p>
            <p className='footerMarginP'>Звоните нам по телефону</p>
            <p>пн-вс с 09:00 до 20:00</p>
            <div className='footerPhoneDiv'>
              <img className='footerPhoneImg' src={Phone}/>
              <a className='footerPhoneNumber' href="tel:+7 (3452) 612-694">+7 (3452) 612-694</a>
            </div>
            <p className='footerCop'>&#169; все права защищены, 2012-2017</p>
          </Grid>
        </Grid>
    );
  }
}

export default Footer;
