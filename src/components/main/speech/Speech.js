import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './Speech.css';

class Speech extends Component {
  render() {
    return (
        <Grid container spacing={0} className='speech-container'>
          <Grid item xs={12}>
            <div className='speechBlock'>
              <div className='speechDiv'>
                <a href='https://vk.com/maxautoschool' target='_blank' rel="noopener noreferrer">
                  <img className='speechImg' src='https://pp.userapi.com/c638216/v638216645/68f62/Gd4TgbxGm_I.jpg' alt='Maxim'/>
                </a>
              </div>
              <div className='speechDiv2'>
                <p className='speechP'>&nbsp; &nbsp;Я уверен в результате</p>
                <p className='speechP'>&nbsp; &nbsp;Если Вы не сдадите экзамен после моего курса</p>
                <p className='speechP'>&nbsp; &nbsp;Мы запишем Вас на него еще раз совершенно бесплатно</p>
                <p className='speechGay'>&nbsp; &nbsp;Преподаватель теории - Максим Долматов</p>
              </div>
            </div>
          </Grid>
        </Grid>
    );
  }
}

export default Speech;
