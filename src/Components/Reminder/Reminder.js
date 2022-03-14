import React from "react";
import './Reminder.css';

class Reminder extends React.Component {
    
    render() {
        return(
            <div className="Reminder">
                {this.props.data}
            </div>
        )
    }
}

export default Reminder;