import React, {Component} from 'react';
import {DepartureItem} from './DepartureItem'

export class DepatureList extends Component {
    render() {
        return (
            <ul>
                {this.props.departures.map(departure => <DepartureItem key={stop.id} departure={departure} />)}
            </ul>
        )
    };
}
