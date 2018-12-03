import React, { Component } from 'react';
import tvShowDetails from './gallery-get.js';
import { Redirect } from 'react-router-dom';
import './Details.css';

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
                <div className="bg">
                    <h1 className="title">{this.state.film.title}</h1>
                    <div className="contentContainer">
                        <h2 className="synopsis"> {this.state.film.synopsis}</h2>
                        <div className="image" >
                            <img src={this.state.film.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Redirect to='/not-found' />
    }
}
}
