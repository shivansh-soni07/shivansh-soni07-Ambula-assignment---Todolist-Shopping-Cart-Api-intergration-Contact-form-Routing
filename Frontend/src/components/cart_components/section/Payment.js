import React, { Component } from 'react';

// Payment component for displaying payment completion message
export class Payment extends Component {
    render() {
        return (
            <div>
                {/* Heading to display payment completion message */}
                <h2 style={{textAlign: "center"}}>Payment Completed</h2>
            </div>
        );
    }
}

export default Payment;
