import React from 'react';
import { Link } from 'react-router-dom';


export default class WishItems extends React.Component {
 
    render() {
        return (
            
            <Link className="wish-list"to={`/wishes/${this.props._id}`}>
            
                <img src={this.props.image}  alt=""/> 
                <h3 className="title-row">{this.props.title} </h3> 
                <p className="price-row">{this.props.price}€ </p>
            </Link>
           
        )
    }
}

