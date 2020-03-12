import React from 'react';
import { Link } from 'react-router-dom';


export default class WishItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         totalSavings: 0   
    }
}
    render() {
        
        return (
            
            <Link className="wish-list"to={`/wishes/${this.props._id}`}>
            
                <img src={this.props.image}  alt=""/> 
                <h3 className="title-row">{this.props.title} </h3> 
                {/* <h5 className="price-row"{this.props.price}€ {(this.props.price < this.state.totalSavings) && style={(color:red)}}></h5> */}
            </Link>
           
        )
    }
}

