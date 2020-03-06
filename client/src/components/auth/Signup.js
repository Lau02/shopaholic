// auth/Signup.js
import React, { Component } from 'react';
import AuthService from '../../services/AuthService'
import "./Signup.scss";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
      console.log(event)
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    console.log(this.state, username, password)

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        error: true
      });
    })
}

handleChange = (event) => {  
  const {name, value} = event.target;
  this.setState({[name]: value});
}
    

render() {
  return(
    <div>
      <h2>Welcome!</h2>
      <h3>to stop being a compulsive shopper create an account next:</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label className="quetepintes">Username </label>
          <input class="input-signup" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
        </fieldset>
        
        <fieldset>
          <label className="quetepintes">Password   </label>
          <input class="input-signup" type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
        </fieldset>
        
        <input class="submit" type="submit" value="Sign up" />
      </form>

      <h1 className="error">{this.state.error ? 'Error' : ''}</h1>
    </div>
  )
}
}

export default Signup;