import React, { Component } from 'react';
import tvShowDetails from './gallery-get.js';
import { Redirect } from 'react-router-dom';

export default class Details extends Component {
   constructor() {
    super();
    this.state = {film: {}}
   }

componentDidMount() {
    this.setState({
        film: tvShowDetails
            .find(film => film.id === this.props.match.params.showPath)
    });
};

render() {
    if (this.state.film !== undefined) {
        return (
            <div>
                <h1>{this.state.film.title}</h1>
            </div>
        )
    } else {
        return <Redirect to='/not-found' />
    }
}
}
