import React, { Component } from 'react';
import "../node_modules/bulma/css/bulma.css"
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    }
  }
  fetchUsers = async (num) => {
    const response = await fetch(`https://randomuser.me/api/?results=${num}`);
    const json = await response.json();
    return json.results;
}



async componentDidMount() {
  const userData = await this.fetchUsers(10);
  this.setState({
    userData: userData,
  })
}
  render() {
    const {userData} = this.state;
  return (
    <div className="App">
      {userData.map(item => {
        return <UserProfile rando={item} />
      })}
      
      </div>
  );
  }
}

export default App;
