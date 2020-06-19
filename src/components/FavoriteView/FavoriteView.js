import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteView extends Component {

    state = {
        favorite: '',
    }

    componentDidMount(){
        this.getFavorites();
    }

    getFavorites = () => {
        this.props.dispatch({
            type: 'SET_FAVORITES'
        })
    }
    
    render() {
        return (
            <div>
                <h2>Favorites List</h2>
                {this.props.reduxState.favoriteReducer.map(item =>
                    <select>
                        <option value="funny">Funny</option>
                        <option value="cohort">Cohort</option>
                        <option value="cartoon">Cartoon</option>
                        <option value="nsfw">NSFW</option>
                        <option value="meme">Meme</option>
                    </select>
                    )}
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteView);