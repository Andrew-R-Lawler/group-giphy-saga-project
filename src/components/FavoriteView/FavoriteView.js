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
            type: 'GET_FAVORITES'
        })
    }
    
    render() {
        return (
            <div>
                <h2>Favorites List</h2>
                {this.props.reduxState.favoriteReducer.map(item =>
                    <select>
                        <option value="1">Funny</option>
                        <option value="2">Cohort</option>
                        <option value="3">Cartoon</option>
                        <option value="4">NSFW</option>
                        <option value="5">Meme</option>
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