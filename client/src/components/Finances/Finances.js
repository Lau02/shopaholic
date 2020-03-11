import React, {Component} from 'react';
import FinancesService from '../../services/FinancesService';

class Finances extends Component {

    constructor(props){
        super(props);
        this.state = {
            saving: '',
            totalSavings: null
        }
        this.service = new FinancesService();
    }

    componentDidMount(){
        console.log('component did mount')
        const userId = this.props.match.params.id
        this.service.getAllSavings(userId)
        .then(response => {
            console.log(response)
            this.setState({
                totalSavings: this.props.sumAllSavings(response)
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
            })  
        })
    }
    
    render(){
        console.log('render')
        return (
            <div className="finances">
                <h1>Hola soy tus finanzas</h1>

               <h2>Saved until today:<span>{this.state.totalSavings} €</span></h2> 
                    <form onSubmit={this.handleSubmit}>

                   <label>Add new saving:</label>
                    <input type="text"  name="saving" value={this.state.saving} placeholder="new saving" onChange={(e) => this.handleSaving(e)}/>
                    <input type="submit" value="Submit"/>   
                    </form> 
             </div>   
           ) 
        
    }
}

export default Finances; 