import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';
import InputMask from 'react-input-mask';
import './Entry.css'

class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameEntry: '',
      phoneEntry: '',
      open: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(e){
    this.setState({nameEntry: e.target.value});
  }
  handleChangePhone(e){
    this.setState({phoneEntry: e.target.value});
  }
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleSubmit(event){
    event.preventDefault()

    fetch('http://88.212.253.194:3011/FormEntry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameEntry: this.state.nameEntry,
        phoneEntry: this.state.phoneEntry
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true });
      }
      else this.setState({formSent: false })
    })
    .catch((error) => {
      console.error(error);
    });
    this.setState({nameEntry: '', phoneEntry: ''});
    this.setState({ open: true });
  }
  render() {
    return (
        <Grid container spacing={0} className='entryBg' id='entry'>
          <Grid item xs={12}>
            <div className='entryForm'>
              <p className='entryFormName'>Запишись на обучение</p>
              <form className='entryFormMargin' onSubmit={this.handleSubmit}>
                <input
                  className='entryFormInput'
                  type='text'
                  required
                  value={this.state.nameEntry}
                  placeholder='Введите имя'
                  onChange={this.handleChangeName.bind(this)}
                />
                <InputMask
                  className='entryFormInput'
                  type='text'
                  required
                  value={this.state.phoneEntry}
                  mask="+7 (999) 999-99-99"
                  placeholder='+7 (___) ___-__-__'
                  onChange={this.handleChangePhone.bind(this)}
                />
                <div className='entryFormDivButton'>
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
    );
  }
}

export default Entry;
