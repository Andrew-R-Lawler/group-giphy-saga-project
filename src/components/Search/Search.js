import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    state = {
        newSearch: ''
    }

    searchGif = (event) => {
        this.setState({
            newSearch: {
                ...this.state.newSearch,
                newSearch: event.target.value

            }
        })
        
    }

    findGif = (event) => {
        event.preventDefault();
        console.log('this is the findGif', this.state.newSearch);
        this.props.dispatch({ type: 'GET_SEARCH', payload: this.state.newSearch })
    }

    addToFavorites = (event) => {
        console.log('this is the payload', event.target.value);
        
        this.props.dispatch({
            type: 'POST_GIF', payload: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    {console.log(this.state.newSearch)}
                    <h1>Giphy Search!</h1>
                    <label for='searchBar'>Search for gif: </label>
                    <input onChange={this.searchGif} id='searchBar' type='text' value= {this.props.newSearch}/>
                    <button onClick={this.findGif} id='submitSearch' >Find gif!</button>
                    <ul>
                        {this.props.reduxState.gifReducer.map(gif => (
                            <li key = {gif.id}><img src = {gif.images.preview_gif.url} alt="I'm a gif"/><button value={gif.images.preview_gif.url} onClick = {this.addToFavorites}>Add To Favorites</button></li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Search);