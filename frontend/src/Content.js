import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { coords: { latitude, longitude } } = pos
                this.setState({ location: { latitude, longitude }})
                /* debugger; */
                console.log(pos);
            }, (err) => {
                console.log("issue")
                console.log(err);
            })
        } else {
            console.error("geolocation not supported");
        }
    }

    render() {
        const { location } = this.state;

        if (location) {
            /*
               fetch('localhost:5000',
               {
                 body: {
                   latitude: location.latitude,
                   longitude: location.longitude
                 }
               }).then(set state).catch(render alert hey we fucked up or you fucekd up idk)
             */
        }
        return ( 
            <Grid>
                <Row>

                </Row>
                <Row>

                </Row>
            </Grid>
        )
    }
}

export default Content;
