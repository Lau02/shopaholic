import React from 'react';
import SingleWish from "./SingleWish";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class   WishItems extends React.Component {
    state = {
        allWish: []
    }

    componentDidMount() {
        axios.get(``)
            .then(allWish => {
                allWish = allWish.data;

                this.setState({
                    allWish: allWish
                });
            });

    }

    // axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    //     .then(beer => this.setState({ ...this.state, beer: beer.data }))


    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to={"/"}> <button></button></Link>
                </nav>


                <h1> Wish List</h1>
            

                {this.state.allWish.map(wish => {
                    return (
                        <div key={wish._id}>
                            <Link to={`/wish/${wish._id}`}>
                            <img src={wish.image} alt=""/>
                            </Link>

                        </div>
                    )
                })
                }
            </div>
        )
    }
}