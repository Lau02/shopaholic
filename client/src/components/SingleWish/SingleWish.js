import React from 'react';
import WishesService from '../../services/WishesService';
import { Link } from 'react-router-dom';
import './SingleWish.scss';
import DeleteWish from '../DeleteWish/DeleteWish';



export default class SingleWish extends React.Component {
  constructor(props){
    super(props)
    this.service = new WishesService()
    this.state = {
      wish: {}
    }
  }

  componentDidMount(){
    this.service.getOneWish(this.props.match.params.id)
    .then(response => {
      this.setState({
        wish: response
      })
    })
  }



  render() {
    return (
      <section className="singlewish">
        <div>
        <h1>vista de un deseo</h1>
            <h1>{this.state.wish.title}</h1>
            <img  className="img-single" src={this.state.wish.image} alt=""/>
            <h2 className="descrption:">Description:{this.state.wish.description}</h2>
            <h2 className="price:">Price:{this.state.wish.price} €</h2>
            <h2 className="date:">Date:{this.state.wish.date}</h2>
            <h2 className="deadline:">Deadline:{this.state.wish.deadline}</h2>
            <h2 className="wishgranted:"></h2> <Link to={this.state.wish.wishGranted}>Wish granted:🧞</Link>
        </div>
        <div>
        <row>
            {/* <Link className="linkdelete"to={'/:id'}>Delete wish <DeleteWish></DeleteWish></Link> */}
            {/* <button className="button is-danger" onClick={this.service.deleteOneWish}>Delete</button> */}
            <button className="button is-danger" onClick={this.props.delete}>Delete</button>
            {/* <Link className="linkupdate"to={'/:id'}>Update wish</Link> */}
            <button className="button is-danger" onClick={() => this.props.deleteOneWish('/:id')}>Delete</button>
            <button className="button is-danger" onClick={() => this.deleteOneWish(this.state.wish._id)}>Delete</button>
        </row>
        </div>
          
      </section>
    ) 
}


}