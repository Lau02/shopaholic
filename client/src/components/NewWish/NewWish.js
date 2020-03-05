import React, { Component } from 'react';
import WishesService from '../../services/WishesService'
class NewWish extends Component {

  constructor(props){
      super(props);
         this.state = { 
        title: '',
        description: '',
        price: 0,
        date: '',
        deadline: '',
        image:'',
        wishGranted:''
      };
      this.service = new WishesService();
  }

  handleFormSubmit = (event) => {
      console.log(event)
      event.preventDefault();
      const title = this.setState.title;
      const description = this.setState.description;
      const price = this.setState.price;
      const date = this.setState.date;
      const deadline = this.setState.deadline;
      const image = this.setState.image;
      const wishGranted = this.setState.wishGranted;


      console.log(this.state, title, description, price, image)


      this.service.newWish(title, description, price, date, deadline, wishGranted)
      .then( response => {
          this.setState({
            title: '',
            description: '',
            price: 0,
            date: '',
            deadline: '',
            image:'',
            wishGranted:'' 
          })
          this.props.getNewWish(response.wish)
        })
          .catch(error => {
              this.setState({
            title: title,
            description: description,
            price: price,
            date: date,
            deadline: deadline,
            image: image,
            wishGranted:wishGranted,
            error: true 
              })
          })
      }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }




  render(){
    return (
      <div>
      <h3>introduce a new wish</h3>
      <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} />

          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} />

          <label>Price:</label>
          <input type="text" name="price" checked={this.state.price} />
          
          <label>date</label>
          <input type="text" name="date" value={this.state.date} />

          <label>deadline</label>
          <input type="text" name="deadline" value={this.state.deadline} />

          <label>Image</label>
          <input type="text" name="image" value={this.state.image} />
          
          <label>Wish Granted:</label>
          <input type="text" name="wishGranted" value={this.state.wishGranted} />
          
          <input type="submit" value="Submit" />
      </form>
      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>
    )
  }
}

export default NewWish;