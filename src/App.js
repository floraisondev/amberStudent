import React, { Component } from 'react';
import './App.css';
import  Testimonial from "./components/testimonial"
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
  axios.get('https://testimonialapi.toolcarton.com/api')
  .then((response) => {
    // handle success
    this.setState({users : response.data, defaultUser : response.data[0]})
    console.log(response.data[0])
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
         <Testimonial users = {users} defaultUser = {defaultUser}/>     
      </div>
    );
  }
}

export default App;;