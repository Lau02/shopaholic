import React, { Component } from 'react';
import WishList from '../WishList/WishList'
import { Link } from 'react-router-dom';
import SingleWish from '../SingleWish/SingleWish';

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (<div>
        bla bla bla        
      <WishList></WishList>
     
  </div>);
    
  }
}

export default Contents;