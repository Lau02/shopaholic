import React from 'react';
import { Link } from 'react-router-dom';


export default class WishItems extends React.Component {
 
    render() {
        console.log(this.props._id)
        return (
            <div>
            
                <ul>
                    <li>
                    
                       <Link className="wish-row"to={`/wishes/${this.props._id}`}>
                       <td><img src={this.props.image}  alt=""/></td> 
                       <td className="title-row">{this.props.title} </td> 
                       <td className="price-row">price:{this.props.price}€ </td>
                        
                        </Link>
                       
                    </li>
                </ul>
            </div>
        )
    }
}

