import React from 'react';
import { Link } from "react-router-dom";
import tvShowDetails from "./gallery-get.js"

export default function Gallery() {
    return (
      <div>
        <div className="container">
        {
            tvShowDetails.map(show => (
                <Item source={show.image} name={show.title} url={show.id} />
            ))
        }
        </div>
      </div>
    );
  }

  class Item extends React.Component {
    render() {
      return (
        <Link to={this.props.url} className="item" >
          <img className="column" src={this.props.source} alt="" />
          <div className="overlay">
            <div className="text">{this.props.name}</div>
          </div>
        </Link>
      );
    }
  }