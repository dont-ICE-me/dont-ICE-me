import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Don't ICE Me</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
       ) 
    }
}

export default Navigation;
