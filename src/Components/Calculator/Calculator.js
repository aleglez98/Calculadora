import React from "react";
import Display from "../Display/Display";
import Keys from "../Keys/keys";
import Button from "../Button/Button";
import Reminder from "../Reminder/Reminder";
import './Calculator.css';

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = { 
            data : '',
            operation : false,
            reminder : [] 
        }
    }

    calculate = () => {
        var result;
        try {
            result = eval(this.state.data);
        } catch (e) {
            this.setState({data: 'error'})
        }
        return result;
    }

    handleClick = e => {
        var result;
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: '', operation : false});
                break;
            case 'delete':
                console.log(this.state.data.length);
                const newNumber = this.state.data.substring(0, this.state.data.length-1);
                this.setState({ data: newNumber, operation : false});
                break;
            case 'equal':
                result = this.calculate();
                this.state.reminder.push(this.state.data + ' = ' + result);
                this.setState({ data: result, operation : false});
                break;
            case '+':
                console.log(this.state.operation);
                if(this.state.operation === false) {
                    this.setState({ data: this.state.data + value, operation : true});
                } else {
                    result = this.calculate();
                    this.state.reminder.push(this.state.data + ' = ' + result);
                    console.log(this.state.reminder);
                    this.setState({ data: result + value, operation : true });
                }
                break;
            case '-':
                console.log(this.state.operation);
                if(this.state.operation === false) {
                    this.setState({ data: this.state.data + value, operation : true});
                } else {
                    result = this.calculate();
                    this.state.reminder.push(this.state.data + ' = ' + result);
                    this.setState({ data: result + value, operation : true });
                }
                break;
            case '*':
                console.log(this.state.operation);
                if(this.state.operation === false) {
                    this.setState({ data: this.state.data + value, operation : true });
                } else {
                    result = this.calculate();
                    this.state.reminder.push(this.state.data + ' = ' + result);
                    this.setState({ data: result + value, operation : true });
                }
                break;
            case '/':
                console.log(this.state.operation);
                if(this.state.operation === false) {
                    this.setState({ data: this.state.data + value, operation : true});
                } else {
                    result = this.calculate();
                    this.state.reminder.push(this.state.data + ' = ' + result);
                    this.setState({ data: result + value, operation : true });
                }
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }

    render() {
        return(
            <div className="Calculator">
                <Reminder data={this.state.reminder} />
                <Display data={this.state.data} />
                <Keys>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="SUPR" value="delete" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="" value="" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="=" value="equal" />

                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                </Keys>        
            </div>
        )
    }
}

export default Calculator;