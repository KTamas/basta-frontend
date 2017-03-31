import React, {Component} from 'react';
import {Stop} from './Stop';

export class StopList extends Component {

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
    }

    render() {
        return (
            <select>
                {this.props.stops.map(stop => <Stop key={stop.id}>{stop.name}</Stop>)}
            </select>
        )
    };
}
