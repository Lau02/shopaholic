import React from 'react';
import "./WishList.scss";
import WishItems from "../WishItems/WishItems";
import WishesService from '../../services/WishesService';
import { Link } from 'react-router-dom';


export default class WishList extends React.Component {
    constructor(props){
      super(props)
      this.service = new WishesService()
      this.state = {
          wishes: []
      }
    }

    componentDidMount() {
        this.service.getAllWishes()
        .then(response => {
          this.setState({
            wishes: response
          })
        })
    }

    render() {
    return (
        <section className="wishlist">
          {/* <h2>Binevenido a tu Area privada {this.props.lggedname}</h2> */}
          <Link className="linknew font-weight-bold"to={'/new'}>New Wish</Link>
            {this.state.wishes && this.state.wishes.length > 0 && (
              <React.Fragment>
                <h1>Your Wish List </h1>
                  <div className="wishitems">
                      <div className=" table is-striped">
                      {this.state.wishes.map(wish => (
                          <WishItems {...wish} key={wish._id}></WishItems>
                      ))}
                    </div>
                  </div>
              </React.Fragment>
            )}
        </section>
    )
  }




}
