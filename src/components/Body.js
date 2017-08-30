import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './main/Main';

class Body extends Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
        <div>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default Body;
