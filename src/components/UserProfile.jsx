import React, { Component } from 'react';

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
    
    getUserData = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=7`);
      const data = await response.json();
      return data.results[0];
    };
   
    async componentDidMount() {
      const testData = await this.getUserData();
      let street = '';
      Object.values(testData.location.street).map(item => {
        return street += item + ' ';
      })
      let locationInfo = '';
      Object.values(testData.location).map((item, index) => {
        return ![0, 5, 6].includes(index) ? locationInfo  += item + ' ' : '';
      })
      
      this.setState({
        gender: testData.gender,
        firstName: testData.name.first,
        lastName: testData.name.last,
        photo: testData.picture.large,
        phone: testData.phone,
        cell: testData.cell,
        email: testData.email,
        dob: testData.dob,
        street: street,
        location: locationInfo,
        
      });
     
    }
    
    render() {
      
      const {firstName, lastName, street, location, email, phone, photo} = this.state;
      return (
        <section className="profileBox">
          <div className="userName">
            <div className="userImage">
              <img src={photo} alt="users potrait"/>
            </div>
            <div className="nameBox">
              <p className="greeting">Hello, I'm</p>
              <h1>{firstName} {lastName}</h1>
            </div>
          </div>
          <div className="infoDisplay">
            <p>{street}</p>
            <p>{location}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
          </div>
        </section>
      );
    }
    
  }
  
  



export default UserProfile;