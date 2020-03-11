import React, {Component} from 'react';
import FinancesService from '../../services/FinancesService';

class Finances extends Component {

    constructor(props){
        super(props);
        this.state = {
            saving: '',
            totalSavings: 0
        }
        this.service = new FinancesService();
    }

    handleSaving = (event) => {
        this.setState({
            saving: event.target.value
        })
    }

    componentDidMount(){
        this.sumAllSavings()
    }

    sumAllSavings = () => {
        const userId = this.props.match.params.id
        this.service.getAllSavings(userId)
        .then(response => {
            let allSavings = response.reduce((ac,cu) => {
                console.log(ac, cu)
                return cu && ac + cu.saving
            },0)
            this.setState({
                totalSavings: allSavings
            })
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
       this.service.getNewSaving(this.state)
       .then(_ => {
            this.sumAllSaving();
                this.setState({saving:''})
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