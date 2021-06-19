import React, { Component } from 'react';
import './App.css';
import  CardList  from './components/card-list/card-list';
import axios from "axios"
class App extends Component {
  constructor(){
    super();
    this.state = {
      users : [],
      defaultUser : null
    };
  }

componentDidMount(){
  axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
  .then((response) => {
    // handle success
    console.log(response.data.results)
    this.setState({ users : response.data.results, defaultUser : response.data.results[0]})
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}
render() {
    const { users, defaultUser} = this.state;
    return (
      <div className="App">
        <h1>Users</h1>
         <CardList users = {users} defaultUser = {defaultUser}/>    
      </div>
    );
  }
}

export default App;;