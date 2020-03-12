import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      
   <React.Fragment className="main">
    <h1>Welcome to Shopaholic.</h1>
      <div className="welcome">
        <h1>To stop throwing your money, please click next:</h1>
           <Link to="/Signup" className="Signup-home">
            Signup
            </Link> 
              <div className="img-home">
                <img className="img-home1" src="/images/mujer-feliz-tirar-dinero-ilustracion-estilo-retro-pop-art-burbuja-dialogo_88813-219.jpg" alt=""></img>
                {/* <img className="img-home2" src="/images/92684739-o-homem-de-negócios-e-o-dinheiro-chovem-a-ilustração-retro-do-vetor-do-pop-art-imitação-de-estilo-de-quadri.jpg" alt=""></img> */}
                
              </div>
              
      </div> 
    </React.Fragment>
  )}
}

export default Home;