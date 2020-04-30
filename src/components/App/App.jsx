import React, { Component } from 'react';
import HpCharacters from '../../containers/HpCharacters.jsx';
import {  
  Route, 
  Switch, 
  BrowserRouter as Router } from 'react-router-dom';
// import CharacterList from '../CharacterList/CharacterList.jsx';
import CharacterDetail from '../CharacterDetail/CharacterDetail.jsx';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HpCharacters} />
            <Route exact path="/characters/:name" component={CharacterDetail} />
          </Switch>
        </Router>
      </>
    );
  }
}
