import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=7');
  const json = await response.json();
  return json.results;
}

function App() {
  const userInfo = fetchUsers();
  return (
    <div className="App">
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      
      
    </div>
  );
}
export default App;
