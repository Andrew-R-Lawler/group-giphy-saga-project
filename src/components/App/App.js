import React, { Component } from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';
import FavoriteView from '../FavoriteView/FavoriteView';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        {/* <Search /> */}
        <Router>
          <div className= 'navigationBar'></div>
          <ul className='navBar'>
            <li>
              <Link to = '/FavoriteView'>Favorites</Link>
            </li>
            <li>
              <Link to='/Search'>
                Search
            </Link>
            </li>
          </ul>
          
           
          
          <Route path='/Search' component={Search} />
          <Route path='/FavoriteView' component={FavoriteView} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
