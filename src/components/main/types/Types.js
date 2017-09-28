import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';
import './Types.css';

class Types extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: '',
      name: '',
      phone: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChangeName(e){
    this.setState({name: e.target.value});
  }
  handleChangePhone(e){
    this.setState({phone: e.target.value});
  }

  handleClickOpen = (e) => {
    this.setState({ open: true, type: e.target.name });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleSubmit(event){
    event.preventDefault()

    fetch('http://localhost:3011/Types', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        phone: this.state.phone,
        type: this.state.type,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true })
      }
      else this.setState({formSent: false })
    })
    .catch((error) => {
      console.error(error);
    });
    this.setState({name: '', phone: ''});
    this.setState({ open: true });
  }

  render() {
    return (
      <Grid container spacing={0} className='types-container'>
        <Grid item xs={12} className='types-h2'>
          <h2>Виды обучения</h2>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className='header-form'>
            <div className='header-body'>
              <div className='header-form-head'>
                <p className='header-form-request'>
                  Групповое
                </p>
              </div>
              <p className='theory-p-types'>Теория</p>
              <ul className='ul-types'>
                <li>Вечерние занятия</li>
              </ul>
              <p className='practice-p-types'>Практика</p>
              <ul className='ul-types'>
                <li>Занятия по ранее составленному графику</li>
              </ul>
              <div className='types-price'>
                <p>от 19 500 р.</p>
              </div>
              <div className='button-types'>
                <input
                  className='types-btn'
                  type='button'
                  name='Групповое обучение'
                  value='Записаться'
                  onClick={this.handleClickOpen}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className='header-form'>
            <div className='header-body'>
              <div className='header-form-head'>
                <p className='header-form-request'>
                  Индивидуальное
                </p>
              </div>
              <p className='theory-p-types'>Теория</p>
              <ul className='ul-types'>
                <li>Индивидуальные занятия</li>
                <li>Программа онлайн обучения</li>
              </ul>
              <p className='practice-p-types'>Практика</p>
              <ul className='ul-types'>
                <li>Занятия по индивидуальному графику</li>
              </ul>
              <div className='types-price'>
                <p>30 000 р.</p>
              </div>
              <div className='button-types'>
                <input
                  className='types-btn'
                  type='button'
                  name='Индивидуальное обучение'
                  value='Записаться'
                  onClick={this.handleClickOpen}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className='header-form'>
            <div className='header-body'>
              <div className='header-form-head'>
                <p className='header-form-request'>
                  VIP
                </p>
              </div>
              <p className='theory-p-types'>Теория</p>
              <ul className='ul-types'>
                <li>Индивидуальные занятия</li>
                <li>Программа онлайн обучения</li>
                <li>4 учебных класса на выбор</li>
              </ul>
              <p className='practice-p-types'>Практика</p>
              <ul className='ul-types'>
                <li>Занятия по индивидуальному графику</li>
                <li>Занятия проводит ваш преподаватель теории</li>
                <li>Прямо от дома или работы</li>
              </ul>
              <div className='types-price'>
                <p>50 000 р.</p>
              </div>
              <div className='button-types'>
                <input
                  className='types-btn'
                  type='button'
                  name='VIP обучение'
                  value='Записаться'
                  onClick={this.handleClickOpen}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className='header-form'>
            <div className='header-body'>
              <div className='header-form-head'>
                <p className='header-form-request'>
                  Уроки вождения
                </p>
              </div>
              <ul className='ul-types'>
                <li>Автомат</li>
                <li>Механика</li>
              </ul>
              <div className='types-price'>
                <p>от 500 р.</p>
              </div>
              <div className='button-types'>
                <input
                  className='types-btn'
                  type='button'
                  name='Уроки вождения'
                  value='Записаться'
                  onClick={this.handleClickOpen}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <form className='form-types' onSubmit={this.handleSubmit}>
            <DialogTitle className='dialog-title'>{this.state.type}</DialogTitle>
            <TextField
              className='types-input'
              label="Имя"
              placeholder="Введите Имя"
              multiline
              required
              margin="normal"
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />
            <InputMask
              className='types-input-phone'
              multiline
              required
              margin="normal"
              value={this.state.phone}
              mask="+7 (999) 999-99-99"
              placeholder='Телефон *'
              onChange={this.handleChangePhone.bind(this)}
            />
            <TextField
              className='types-input'
              label="Тип обучения"
              value={this.state.type}
              multiline
              margin="normal"
              disabled
            />
            <div className='types-submit'>
              <Button
                raised color="primary"
                type='submit'
              >
                Отправить
              </Button>
            </div>
          </form>
        </Dialog>
      </Grid>
    );
  }
}

export default Types;
