import React from 'react';
import WishesService from '../../services/WishesService';


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
      <section className="singlewish">
      
        <h1>{this.state.wish.title}</h1>
        
          
            <h2 className="descrption:">Description:{this.state.wish.description}</h2>
            <h2 className="price:">Price:{this.state.wish.price}</h2>
            <h2 className="date:">Date:{this.state.wish.date}</h2>
            <h2 className="deadline:">Deadline:{this.state.wish.deadline}</h2>
            <h2 className="wishgranted:">Wish granted:{this.state.wish.wishGranted}</h2>
         
          <h2 className="image">{this.state.wish.image}</h2> 
          
       
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