import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteView extends Component {
    render() {
        return (
            <div>
                <h2>Favorite Gifs!</h2>
                <ul>
                    {}
                </ul>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteView);