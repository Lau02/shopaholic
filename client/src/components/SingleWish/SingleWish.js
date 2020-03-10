import React from 'react';
import WishesService from '../../services/WishesService';
import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'


export default class SingleWish extends React.Component {
  constructor(props){
    super(props)
    this.service = new WishesService()
    this.state = {
      wish: {}
    }
  }

  // componentDidMount = () => this.getOneWish()

  // getOneWish = () => {
  //   this.service.getOneWish(this.props.match.params.id)
  //   .then(theWish => this.setState({wish: theWish}))
  //   .catch(err => console.log(err))
  // }


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

        <h1>{this.state.wish.title}</h1>
        <img src={this.props.image}  alt=""/> 
            
            <h3 className="descrption:">Description:{this.state.wish.description}</h3>
            <h2 className="price:">Price:{this.state.wish.price}</h2>
            <h2 className="date:">Date:{this.state.wish.date}</h2>
            <h2 className="deadline:">Deadline:{this.state.wish.deadline}</h2>
            <h2 className="wishgranted:">Wish granted: </h2><Link to={this.state.wish.wishGranted}>🧞</Link>
         
          
          
       
      </section>
    ) 
}

// render() {
//   return (
//     <Container className="singlewish">
    
//       <h1>{this.state.wish.title}</h1>
//       <Row>
//         {/* <Col md={{ span: 4, offset: 1 }}> */}
//           <h2 className="descrption:">Description:{this.state.wish.description}</h2>
//           <h2 className="price:">Price:{this.state.wish.price}</h2>
//           <h2 className="date:">Date:{this.state.wish.date}</h2>
//           <h2 className="deadline:">Deadline:{this.state.wish.deadline}</h2>
//           <h2 className="wishgranted:">Wish granted:{this.state.wish.wishGranted}</h2>
//         {/* </Col> */}

//         {/* <Col md={{ span: 5, offset: 1 }}> */}
//         <h2 className="image">{this.state.wish.image}</h2> 
//         {/* </Col> */}
//      </Row>
//     </Container>
//   )
}