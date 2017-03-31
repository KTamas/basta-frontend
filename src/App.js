import React, {Component} from 'react';
import {StopList, DepartureList, CurrentLocation} from './components';
import {getNearbyStops} from './lib/backendService';

class App extends Component {
    state = {
        location: {
            lat: 0,
            lon: 0
        },
        stops: []
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(pos => {
            this.setState({
                location: {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                }
            });

            getNearbyStops(this.state.location.lat, this.state.location.lon, 0.6).then(stops => {
                console.log("here!");
                console.log(stops);
                this.setState({stops});
            });

        });
    }

    render() {
        return (
            <div className="App">
                <StopList stops={this.state.stops}/>
                <CurrentLocation location={this.state.location} />
            </div>
        );
    }
}

export default App;
