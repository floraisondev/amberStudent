import React, { Component } from 'react';
import './App.css';
import  CardList  from './components/card-list/card-list';
import Navbar from "./components/navbar/Navbar"
import axios from "axios"
class App extends Component {
  constructor(){
    super();
//creating state variables to store the users fetched
//defaultUser will store the first user which will initially be the main card
    this.state = {
      users : [],
      defaultUser : null
    };
  }

//fetching data
  componentDidMount(){
  axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
  .then((response) => {
    // handle success
    this.setState({ users : response.data.results, defaultUser : response.data.results[0]})
  })
  .catch((error) => {
    // handle error
    console.error(error);
  })
}
render() {
    const { users, defaultUser} = this.state;
    return (
      <div className="App">
        <Navbar />
        {/*rendering card list*/}
         <CardList users = {users} defaultUser = {defaultUser}/>    
      </div>
    );
  }
}

export default App;;