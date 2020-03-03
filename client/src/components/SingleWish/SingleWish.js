import React from 'react';
// import './BeerDetail.css'
export default class SingleWish extends React.Component {
  render() {
    return (
      <div className="singlewish">
        <img src={this.props.wish.image_url} />
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