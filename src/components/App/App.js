import React, { Component } from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
      </div>
    );
  }
}

export default connect()(App);
