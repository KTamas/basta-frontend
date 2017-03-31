import React, {Component} from 'react';

export class CurrentLocation extends Component {
    render() {
        return (
            <div>Lat: {this.props.location.lat}, Lon: {this.props.location.lon}</div>
        )
    }
}
