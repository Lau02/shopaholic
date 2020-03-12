import React from 'react';
import WishesService from '../../services/WishesService';
import { Link } from 'react-router-dom';
import './SingleWish.scss';
import DeleteWish from '../DeleteWish/DeleteWish';
import moment from 'moment'


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

  deleteOneWish = id => {
    this.service.deleteOneWish(id)
      .then(() => this.props.history.push(`/user/${this.props.userInSession._id}`))
      .catch(err => console.log(err));
  };
  


  updateOneWish = id => {
    this.services.updateOneWish(id)
      .then(wishes => this.setState({ wishes: wishes }))
      .catch(err => console.log(err));
  };


  //  days =(date) =>{
  // let date1 = moment({this.state.wish.date});
  // let date2 = moment({this.state.wish.wishgranted});
  // console.log(date2.diff(date1, 'days'), ' Remaining days');
  // }

  days =() =>{
    let date1 = moment(this.state.wish.date);
    let date2 = moment(this.state.wish.wishgranted);
    console.log(date1, date2)
    return date2.diff(date1, 'days') + ' days remaining';
}


  render() {
    return (
      <section className="hero-single">
  <div className="contaniner"></div>

        <div >
        <div>
        <Link  className="back-wish"to={`/user/${this.props.userInSession._id}`}>Back to Wishes</Link>
        </div>
            <h1>{this.state.wish.title}</h1>
            
            <h2 className="descrption:">{this.state.wish.description}</h2>
            <h2 className="price:">Price: {this.state.wish.price} €</h2>
            <h2 className="date:">Date: {this.state.wish.date}</h2>
            <h2 className="deadline:">Deadline: {this.state.wish.deadline}</h2>
            <h2 className="limit">Limit: {this.days()}</h2>
            <a target="_blank" href={this.state.wish.wishGranted}><h2>Wish Granted</h2></a>

       </div>
       <div className="container2">
       <img  className="img-single" src={this.state.wish.image} alt=""/>
      <br></br>
        <div className="buttons-del-up">
            {/* <Link className="linkdelete"to={'/:id'}>Delete wish <DeleteWish></DeleteWish></Link> */}
            {/* <button className="button is-danger" onClick={this.service.deleteOneWish}>Delete</button> */}
            {/* <button className="button is-danger" onClick={this.props.delete}>Delete</button> */}
            {/* <Link className="linkupdate"to={'/:id'}>Update wish</Link> */}
            <button className="button is-dark is-large" onClick={() => this.deleteOneWish(this.state.wish._id)}>Delete</button>
            <button className="button is-dark is-large" onClick={() => this.updateOneWish(this.state).wish._id}>Update</button>
            {/* <button className="button is-danger" onClick={() => this.deleteOneWish(this.state.wish._id)}>Delete</button> */}
            {/* <button className="button is-danger" onClick={(alert('Sure you want to delete this wish?'))}Delete></button> */}
              
            </div>
            </div>  
       
          
      </section>
    ) 
}


}