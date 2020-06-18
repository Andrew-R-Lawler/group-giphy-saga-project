import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    render(){
        return(
            <div></div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Search);