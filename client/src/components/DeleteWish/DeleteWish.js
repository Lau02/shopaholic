// import React from 'react';
// import WishesService from '../../services/WishesService';
// import { Link } from 'react-router-dom';


// export default class DeleteWish extends React.Component {
    
//     constructor(props){
//         super(props)
//         this.service = new WishesService()
//         this.state = {
//           wish: {}
          
//         }
//       }

//     // componentDidMount(){
//     //     this.service.deleteOneWish(this.props.match.params.id)
//     //     .then(response => {
//     //       this.setState({
//     //         wish: response
//     //       })
//     //     })
//     //   }


//     render(){


//     return (
//         <div className="container">
//         {/* <Link to={`/user/${this.props.userInSession._id}`}>Back to your Wishes</Link> */}
      
//       <h1>Delete your Wish</h1>
      
      
//           <h2 className="quetepintes"> Are you sure you want to delete your Wish?</h2>
//           <h2>{this.state.title} </h2>
//           {/* <button onClick={() => this.service.deleteOneWish(this.props.wish)}>🙊</button> */}
//           <button className="button is-danger" onClick={this.service.deleteOneWish}>Delete</button>
       
//         </div>
//     )
// }
// }
