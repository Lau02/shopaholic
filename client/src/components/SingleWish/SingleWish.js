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

  deleteOneWish = (id )=> {
    let wishId = this.state.wish.id;
    this.services
      .deleteOneWish(wishId)
      .then(() => this.updateWish())
      .catch(err => console.log(err));
  };

  updateOneWish = () => {
    this.services
      .getOneWish(this.state.userId)
      .then(wishes => this.setState({ wishes: wishes }))
      .catch(err => console.log(err));
  };


  //  days =(date) =>{
  // let date1 = moment({this.state.wish.date});
  // let date2 = moment({this.state.wish.wishgranted});
  // console.log(date2.diff(date1, 'days'), ' Remaining days');
  // }


  render() {
    return (
      <section className="hero-single">
        <div className="contaniner">
            <h1>{this.state.wish.title}</h1>
            
            <h2 className="descrption:">Description: {this.state.wish.description}</h2>
            <h2 className="price:">Price: {this.state.wish.price} €</h2>
            <h2 className="date:">Date: {this.state.wish.date}</h2>
            <h2 className="deadline:">Deadline: {this.state.wish.deadline}</h2>
            {/* <h2>Remaining days: {days()}</h2> */}
            <h2 className="wishgranted:"></h2> <Link to={this.state.wish.wishGranted} className="linknew font-weight-bold">Wish granted:🧞</Link>
       </div>
       <div className="container2">
       <img  className="img-single" src={this.state.wish.image} alt=""/>
       </div>
       
        
            {/* <Link className="linkdelete"to={'/:id'}>Delete wish <DeleteWish></DeleteWish></Link> */}
            {/* <button className="button is-danger" onClick={this.service.deleteOneWish}>Delete</button> */}
            {/* <button className="button is-danger" onClick={this.props.delete}>Delete</button> */}
            {/* <Link className="linkupdate"to={'/:id'}>Update wish</Link> */}
            <button className="button is-danger" onClick={() => this.deleteOneWish(this.state.wish.id)}>Delete</button>
            {/* <button className="button is-danger" onClick={() => this.deleteOneWish(this.state.wish._id)}>Delete</button> */}
            {/* <button className="button is-danger" onClick={(alert('Sure you want to delete this wish?'))}Delete></button> */}
              
      
       
          
      </section>
    ) 
}


}