import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { YMInitializer } from 'react-yandex-metrika';
import './AppBar.css';

const styles = {
  appBar: {
    backgroundColor: 'hsla(0, 0%, 0%, 0)',
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: '50px',
  },
};

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className='appBarRoot' id='main'>
      <AppBar position="static" className={classes.appBar}>
        <div className='appBar'>
          <Toolbar className={classes.toolbar}>
            <div className='appDiv'>
              <a className='appA' href='#main'>Главная</a>
              <a className='appA' href='#advantage'>Преимущества</a>
              <a className='appA' href='#reviews'>Отзывы</a>
              <a className='appA' href='#entry'>Запись</a>
              <a className='appA' href='#addresses'>Адреса</a>
            </div>
            <a className='appBarPhone' href="tel:+7 (3452) 612-694">
              <span className='appBarPhoneSpan'>Телефон:</span>
              8 (3452) 612-694
            </a>
          </Toolbar>
        </div>
      </AppBar>
      <YMInitializer accounts={[45860646]} />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
