import React from 'react';
import WishesService from '../../services/WishesService';

export default class SingleWish extends React.Component {
  constructor(props){
    super(props)
    this.service = new WishesService()
    this.state = {
      wish: {}
    }
  }

  componentDidMount(){
    console.log(this.props.match.params)
    this.service.getOneWish()
    .then(response => {
      this.setState({
        wish: response
      })
      console.log(response)
    })
  }

  render() {
    return (
      <div className="singlewish">
        {/* <img src={this.props.wish.image} /> */}
        <p className="image">{this.props.wish.image}</p>
        <p className="title">{this.props.wish.name}</p>
        <p className="descrption">{this.props.wish.description}</p>
        <p className="price">{this.props.wish.price}</p>
        <p className="date">{this.props.wish.date}</p>
        <p className="deadline">{this.props.wish.deadline}</p>
       <p className="wishgranted">{this.props.wish.wishGranted}</p>
      </div>
    )
  }
}