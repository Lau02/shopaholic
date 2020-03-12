import React from 'react';
import { Link } from 'react-router-dom';
import FinancesService from '../../services/FinancesService';

export default class WishItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         totalSavings: 0   
    }
    this.service = new FinancesService();
}

componentDidMount(){
    this.sumAllSavings()
 }
 sumAllSavings(){
     const userId = this.props.user
     this.service.getAllSavings(userId)
     .then(response => {
         let allSavings = response.reduce((ac,cu) => {
             console.log(ac, cu)
             return cu && ac + cu.saving
         },0)
         this.setState({
             totalSavings: allSavings,
         })
     })
 }

    render() {
        
        return (
            
            <Link className="wish-list"to={`/wishes/${this.props._id}`}>
                <img src={this.props.image}  alt=""/> 
                <h3 className="title-row">{this.props.title} </h3> 
                <h5 className="price-row" style={{ color: (this.props.price < this.state.totalSavings) ? '#00cc66': '#B8144B'}}>{this.props.price}€</h5>
                {/* <h5 className="price-row"{this.props.price}€ {(this.props.price < this.state.totalSavings) && style={(color:red)}}></h5> */}
            </Link>
           
        )
    }
}

