import React, {Component} from 'react';

export class Stop extends Component {
    render() {
        return (
            <option>{this.props.children}</option>
        )
    };
}
