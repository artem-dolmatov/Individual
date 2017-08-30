import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
import InputMask from 'react-input-mask';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      open: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(e){
    this.setState({name: e.target.value});
  }
  handleChangePhone(e){
    this.setState({phone: e.target.value});
  }
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleSubmit(event){
    event.preventDefault()

    fetch('http://151.248.118.213:3001/Form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        phone: this.state.phone
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
    return(
      <Grid container spacing={0} className='header'>
        <Grid container spacing={0} className='headerShadow'>
          <Grid item xs={12} sm={6}>
            <div className='headerText'>
              <h1 className='headerH1'>Индивидуальное обучение в автошколе Формула</h1>
              <p className='headerP'>- ускоренная программа</p>
              <p className='headerP'>- индивидуальное расписание</p>
              <p className='headerP'>- неограниченное количество теоретических занятий</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='headerForm'>
              <p className='headerFormName'>Оставьте заявку на обучение</p>
              <form className='headerFormMargin' onSubmit={this.handleSubmit}>
                <label className='headerFormLabel'>Имя</label>
                <input
                  className='headerFormInput'
                  type='text'
                  required
                  value={this.state.name}
                  placeholder='Введите имя'
                  onChange={this.handleChangeName.bind(this)}
                />
                <label className='headerFormLabel'>Телефон</label>
                <InputMask
                  className='headerFormInput'
                  type='text'
                  required
                  value={this.state.phone}
                  mask="+7 (999) 999-99-99"
                  placeholder='+7 (___) ___-__-__'
                  onChange={this.handleChangePhone.bind(this)}
                />
                <div className='headerFormDivButton'>
                  <Button
                    raised color="primary"
                    type='submit'
                  >
                    Отправить
                  </Button>
                  <Snackbar
                    className='Snackbar'
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                    transition={Fade}
                    SnackbarContentProps={{
                      'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Заявка успешно отправлена</span>}
                  />
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
