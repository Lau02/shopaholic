import React, { Component } from 'react';
import WishesService from '../../services/WishesService'
import { Link } from 'react-router-dom';

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
      event.preventDefault();
      const title = this.state.title;
      const description = this.state.description;
      const price = this.state.price;
      const date = this.state.date;
      const deadline = this.state.deadline;
      const image = this.state.image;
      const wishGranted = this.state.wishGranted;

      this.service.getNewWish(this.state)
      .then(response => {
          this.setState({
            title: '',
            description: '',
            price: 0,
            date: '',
            deadline: '',
            image:'',
            wishGranted:'' 
          })
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
      <Link to={`/user/${this.props.userInSession._id}`}>Back to Wishes</Link>
      <h1>Add a new wish</h1>
      <form onSubmit={this.handleFormSubmit}>
          <label className="quetepintes">Title:</label>
          <input type="text" name="title" value={this.state.title} placeholder="title"  onChange={this.handleChange}/>

          <label className="quetepintes">Description:</label>
          <input type="text" name="description" value={this.state.description} placeholder="description"  onChange={this.handleChange}/>

          <label className="quetepintes">Price:</label>
          <input type="number" name="price" checked={this.state.price} placeholder="price"  onChange={this.handleChange}/>
          
          <label className="quetepintes">date</label>
          <input type="text" name="date" value={this.state.date} placeholder="date"  onChange={this.handleChange}/>

          <label className="quetepintes">deadline</label>
          <input type="text" name="deadline" value={this.state.deadline} placeholder="deadline"  onChange={this.handleChange}/>

          <label className="quetepintes">Image</label>
          <input type="text" name="image" value={this.state.image} placeholder="image"  onChange={this.handleChange}/>
          
          <label className="quetepintes">Wish Granted:</label>
          <input type="text" name="wishGranted" value={this.state.wishGranted} placeholder="add the link to shop your wish 😄" onChange={this.handleChange}/>
          
          <input type="submit" value="Submit" />
      </form>
      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>
    )
  }
}

export default NewWish;