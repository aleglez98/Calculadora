import React from "react";
import './Reminder.css';

class Reminder extends React.Component {
    
    render() {
        const listOperations = this.props.data.map((operation) =>
            <li key={operation.toString()}>{operation}</li>
        )
        return(
            <div className="Reminder">
                <ul>{listOperations}</ul>
            </div>
        )
    }
}

export default Reminder;