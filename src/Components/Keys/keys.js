import React from "react";
import './Keys.css';

class Keys extends React.Component {
    render() {
        return(
            <div className="Keys">
                {this.props.children}
            </div>
        )
    }
}

export default Keys;