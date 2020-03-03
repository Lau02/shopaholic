import React from 'react';
import axios from "axios";
import "./WishList.scss";
import WishItems from "../WishItems/WishItems"

export default class WishList extends React.Component {

    state = {
        
    }

    render() {
    return (
        <section className="wishlist">
            {this.state.todo.length > 0 && (
            <React.Fragment>
              <h1>Wish List({this.state.todo.length})</h1>
              <ul>
                {this.state.todo.map(wish => (
                  <li key={wish._id}>
                    <WishItems {...wish}></WishItems>
                  </li>
                ))}
              </ul>
            </React.Fragment>
            )}
        </section>
    )
  }
}