import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import './AppBar.css';

const styles = {
  appBar: {
    backgroundColor: '#507299',
  },
  toolbar: {
    minHeight: '50px',
  },
};

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className='appBarRoot'>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <a className='appBarPhone' href="tel:+7 (3452) 612-694">
            <span className='appBarPhoneSpan'>Телефон:</span>
            8 (3452) 612-694
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
