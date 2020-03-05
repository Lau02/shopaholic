import React from 'react';
import "./WishList.scss";
import WishItems from "../WishItems/WishItems";
import WishesService from '../../services/WishesService';
import NewWish from '../NewWish/NewWish';


export default class WishList extends React.Component {
    constructor(props){
      super(props)
      this.service = new WishesService()
      this.state = {
          wishes: []
      }
    }

    componentDidMount() {
      {this.state.wishes.length === 0 && (
        this.service.getAllWishes()
      .then(response => {
        this.setState({
          wishes: response
        })
      })
      )}
    }

    render() {
      console.log(this.state.wishes)
    return (
        <section className="wishlist">

        <NewWish>Add a new Wish🧞</NewWish>
            {this.state.wishes && this.state.wishes.length > 0 && (
            <React.Fragment>
              <h1>Wish List {this.state.wishes.length}</h1>
              <ul>
                {this.state.wishes.map(wish => (
                    <WishItems {...wish} key={wish._id}></WishItems>
                ))}
              </ul>
            </React.Fragment>
            )}
        </section>
    )
  }
}
