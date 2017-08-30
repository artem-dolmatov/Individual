import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AvTimer from '../../../images/AvTimer.svg'
import GiftCard from '../../../images/giftCard.svg'
import Home from '../../../images/Home.svg'
import WorkGroup from '../../../images/WorkGroup.svg'
import './Advantage.css';

class Advantage extends Component {
  render() {
    return (
      <Grid container spacing={0} className='advantageGrid'>
        <div className='advantageH2'>
          <h2>Преимущества</h2>
        </div>
        <Grid item sm={6} xs={12}>
          <div className='advantageDiv'>
            <div className='advantageDivFloat'>
              <img src={AvTimer} className='advantageIcons'/>
            </div>
            <div>
              <h3 className='advantageH3'>Посещение лекций в удобное для вас время</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='advantageDiv'>
            <div className='advantageDivFloat'>
              <img src={Home} className='advantageIcons'/>
            </div>
            <div>
              <h3 className='advantageH3'>Возможность сменить учебный класс в процессе обучения</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='advantageDiv'>
            <div className='advantageDivFloat'>
              <img src={GiftCard} className='advantageIcons'/>
            </div>
            <div>
              <h3 className='advantageH3'>Получение специализированной программы для онлайн занятий</h3>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className='advantageDiv'>
            <div className='advantageDivFloat'>
              <img src={WorkGroup} className='advantageIcons'/>
            </div>
            <div>
              <h3 className='advantageH3'>В этот курс мы уместили больше часов занятий сокращая разрыв между ними, для лучшего усвоения навыков</h3>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Advantage;
