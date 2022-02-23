import React, { Component } from 'react';
import './NumberButton.css';


class NumberButton extends Component {

    constructor(props) {
        super(props);
        this.number = props.number;
    }

    render(){
        return(
            <button>{this.props.number}</button>
        )
    }
}

export default NumberButton;