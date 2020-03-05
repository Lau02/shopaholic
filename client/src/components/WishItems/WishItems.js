import React from 'react';
import { Link } from 'react-router-dom';


export default class WishItems extends React.Component {
 
    render() {
        console.log(this.props._id)
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`/wishes/${this.props._id}`}>
                            {this.props.title} price:{this.props.price}€
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

