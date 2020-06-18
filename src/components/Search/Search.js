import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    searchGif = () => {

    }

    render(){
        return(
            <div>
                <div>
                    <h1>Giphy Search!</h1>
                    <label for='searchBar'>Search for gif: </label>
                    <input onChange={this.searchGif} id='searchBar' type='text' />
                    <button onClick={this.findGif} id='submitSearch' >Find gif!</button>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Search);