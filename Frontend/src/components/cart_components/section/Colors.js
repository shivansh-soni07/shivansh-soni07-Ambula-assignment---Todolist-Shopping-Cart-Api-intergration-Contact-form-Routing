import React, { Component } from 'react';

export class Colors extends Component {
    render() {
        // Destructure the colors array from props
        const { colors } = this.props;
        return (
            // Render a div with the class name "colors"
            <div className="colors">
                {
                    // Map through the colors array and render a button for each color
                    colors.map((color, index) => (
                        <button key={index} style={{ background: color }}></button>
                    ))
                }
            </div>
        );
    }
}

export default Colors;
