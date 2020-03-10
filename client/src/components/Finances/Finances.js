import React, {Component} from 'react';
import FinancesService from '../../services/FinancesService';

class Finances extends Component {

    constructor(props){
        super(props);
        this.state = {
            saving: '',
            user: '',
            total: ''
        }
        this.service = new FinancesService();
    }

    
    
    componentDidMount(){
        this.service.getAllSavings()
        .then(response => {
            this.setState({
                savings: response
            })
    })
}

    


    handleSaving = (event) => {
        this.setState({
            saving: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
       this.service.getNewSaving(this.state)
       .then(_ => {
        this.setState({
            saving:'',
            uaser: ''  
       })  
    })
    }



    
    render(){
        return (
            <div className="finances">
                <h1>Hola soy tus finanzas</h1>
                <p>Total: <span>{this.state.total} €</span></p>
               <h2>Saved until today:  {/* { ...this.state, loggedInUser: nextProps["userInSession"] }*/}</h2> 
                    <form onSubmit={this.handleSubmit}>

                   <label>Add new saving:</label>
                    <input type="text"  name="saving" value={this.state.saving} placeholder="new saving" onChange={(e) => this.handleSaving(e)}/>
                    <input type="submit" value="Submit" />   
                    </form> 
             </div>   
           ) 
        
    }
}

export default Finances; 