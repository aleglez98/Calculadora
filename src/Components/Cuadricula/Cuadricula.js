import React from "react";

class Cuadricula extends React.Component {


    constructor() {
        super();
        this.viewNumber = "45";
        this.state = {
            operation : false,
            firstNumber : "",
            secondNumber : "",
        };
    }

    addNumbers(number) {
        if(this.state.operation === false) {
            this.viewNumber += number;
            console.log(this.viewNumber);
        }
    }

    componentDidUpdate() {
        document.getElementById('barra').value = this.viewNumber;
      }

    suma() {

    }

    render() {
        return(
            <>
                <div>
                    <p id='barra'>{this.viewNumber}</p>
                </div>
                <div>
                <button onClick={this.suma}> AC </button>
                    <button onClick={this.suma}> C </button>
                    <button onClick={this.suma}> % </button>
                    <button onClick={this.suma}> / </button>
                    <br />
                    <button onClick={(e) => this.addNumbers(7)}> 7 </button>
                    <button onClick={(e) => this.addNumbers(8)}> 8 </button>
                    <button onClick={(e) => this.addNumbers(9)}> 9 </button>
                    <button onClick={(e) => this.suma}> * </button>
                    <br />
                    <button onClick={(e) => this.addNumbers(4)}> 4 </button>
                    <button onClick={(e) => this.addNumbers(5)}> 5 </button>
                    <button onClick={(e) => this.addNumbers(6)}> 6 </button>
                    <button onClick={this.suma}> - </button>
                    <br />
                    <button onClick={(e) => this.addNumbers(1)}> 1 </button>
                    <button onClick={(e) => this.addNumbers(2)}> 2 </button>
                    <button onClick={(e) => this.addNumbers(3)}> 3 </button>
                    <button onClick={this.suma}> + </button>
                    <br />
                    <button onClick={(e) => this.addNumbers(0)}> 0 </button>
                    <button onClick={this.suma}> = </button>
                    
                </div>
            </>
        ); 
    }
}

export default Cuadricula;