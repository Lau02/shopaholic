import React, {Component} from 'react';

class Finances extends Component {

    sumar =  () => {
        let total = 0;	
        let valor = parseInt(valor);         
        total = document.getElementById('spTotal').innerHTML;
        total = (total == null || total == undefined || total == "") ? 0 : total;
        total = (parseInt(total) + parseInt(valor));
        document.getElementById('spTotal').innerHTML = total;
    }
    
    render(){
        return (
            

            <div className="finances">
                Hola soy tus finanzas
                <h2>Saved until today: </h2>
   
                    <span>Valor #1</span>
                    <input type="text" id="txt_campo_1" onchange="sumar(this.value);" />
                    <br/>
                    <span>Valor #2</span>
                    <input type="text" id="txt_campo_2" onchange="sumar(this.value);" />
                    <br/>
                    <span>Valor #3</span>
                    <input type="text" id="txt_campo_3" onchange="sumar(this.value);" />
                    <br/>
                    <span>El resultado es: </span> <span id="spTotal"></span>
                    
             </div>   
           ) 
        
    }
}

export default Finances;