import React, { Component } from 'react';
import tvShowDetails from './gallery-get.js'

export default class Details extends Component {
   constructor() {
    super();
    this.state = {film: {}}
   }

componentDidMount(){
    this.setState({
        film: tvShowDetails
            .find(film => film.id === this.props.match.params.showPath)
    });
};

render(){
    return (
        <div>
            <h1>{this.state.film.title}</h1>
        </div>
    );
}
}
