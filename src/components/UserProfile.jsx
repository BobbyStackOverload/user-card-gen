import React, { Component } from 'react';

import { Card, CardImage, Container, Navbar, Icon } from 'bloomer';
import "../App.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      photo: '',
      location: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      cell: 0,
      dob: 0,
    }
      
    }
    
    async componentDidMount() {
      const { rando } = this.props;
      let street = '';
      Object.values(rando.location.street).map(item => {
        return street += item + ' ';
      })
      let locationInfo = '';
      Object.values(rando.location).map((item, index) => {
        return ![0, 5, 6].includes(index) ? locationInfo  += item + ' ' : '';
      })
      
      this.setState({
        gender: rando.gender,
        firstName: rando.name.first,
        lastName: rando.name.last,
        photo: rando.picture.large,
        phone: rando.phone,
        cell: rando.cell,
        email: rando.email,
        dob: rando.dob,
        street: street,
        location: locationInfo,
        
      });
      console.log(rando);
    }
    
    render() {
      
      const {firstName, lastName, street, location, email, phone, photo} = this.state;
      return (
        <Container className="App">
          <Card className="profileBox">
            <Container className="userName">
              <CardImage >
                <img src={photo} alt="users potrait"/>
              </CardImage>
              <div className="nameBox">
                <p className="greeting">Hi, I'm</p>
                <h1>{firstName} {lastName}</h1>
              </div>
            </Container>
            <Container className="infoDisplay">
              <p><Icon isSize="small" className="fas fa-map-marker-alt"/> {street}, {location}</p>
              <p><Icon isSize="small" className="fas fa-mobile-alt" /> {phone}</p>
              <p><Icon isSize="small" className="far fa-envelope" /> {email}</p>
              
            </Container>
          </Card>
        </Container>
        
      );
    }
    
  }
  export default UserProfile;