import React, { Component } from 'react';


class App extends Component {
searchGif = () => {

}



  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <label for='searchBar'>Search for gif: </label>
        <input onChange={this.searchGif} id='searchBar' type='text'/>
        <button onClick={this.findGif} id='submitSearch' >Find gif!</button>
      </div>
    );
  }
  
}

export default App;
